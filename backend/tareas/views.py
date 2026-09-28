from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Tarea
from .serializers import TareaSerializer


@api_view(["GET"])
def listar_tareas(request):
    estado = request.query_params.get("estado")

    if estado and estado not in ["pendiente", "completada"]:
        return Response(
            {
                "detail": "Estado inválido. Use pendiente o completada."
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    tareas = Tarea.objects.all()

    if estado:
        tareas = tareas.filter(estado=estado)

    serializer = TareaSerializer(tareas, many=True)

    return Response(serializer.data)


@api_view(["GET", "PATCH"])
def detalle_tarea(request, id):
    try:
        tarea = Tarea.objects.get(id=id)
    except Tarea.DoesNotExist:
        return Response(
            {"detail": "Tarea no encontrada."},
            status=status.HTTP_404_NOT_FOUND,
        )

    if request.method == "GET":
        serializer = TareaSerializer(tarea)
        return Response(serializer.data)

    if request.method == "PATCH":
        serializer = TareaSerializer(
            tarea,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )