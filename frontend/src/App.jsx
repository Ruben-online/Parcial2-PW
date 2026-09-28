import "./App.css";

function App() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="brand">
            <h2>UNIVERSIDAD</h2>
            <p>Portal estudiantil</p>
          </div>

          <nav className="nav">
            <a href="#" className="nav-item active">
              <span className="nav-dot"></span>
              Inicio
            </a>

            <a href="#" className="nav-item">
              <span className="nav-dot"></span>
              Cursos
            </a>

            <a href="#" className="nav-item">
              <span className="nav-dot"></span>
              Tareas
            </a>

            <a href="#" className="nav-item">
              <span className="nav-dot"></span>
              Calendario
            </a>

            <a href="#" className="nav-item">
              <span className="nav-dot"></span>
              Avisos
            </a>
          </nav>
        </div>

        <div className="help-card">
          <strong>¿Necesitas ayuda?</strong>
          <span>Centro de soporte</span>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div>
            <h1>Buenos días, Fernando</h1>
            <p>Esto es lo que requiere tu atención hoy.</p>
          </div>

          <div className="header-actions">
            <button className="notifications">3 avisos nuevos</button>
            <div className="avatar"></div>
          </div>
        </header>

        {/* Resumen */}
        <section className="stats">
          <article className="stat-card">
            <span className="stat-label">TAREAS PENDIENTES</span>
            <strong>5</strong>
            <p>2 vencen pronto</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">EVALUACIONES</span>
            <strong>2</strong>
            <p>esta semana</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">CURSOS ACTIVOS</span>
            <strong>8</strong>
            <a href="#">Ver todos los cursos →</a>
          </article>
        </section>

        {/* Tareas */}
        <section className="tasks-section">
          <div className="section-header">
            <h2>Próximas tareas</h2>
            <a href="#">Ver todas</a>
          </div>

          {/* Tarea vencida */}
          <article className="task-card overdue">
            <div>
              <h3>Proyecto de Programación</h3>
              <p>Programación Web · Venció ayer</p>
            </div>

            <span className="status status-overdue">
              ! VENCIDA
            </span>

            <a className="task-link" href="#">
              Ver tarea →
            </a>
          </article>

          {/* Tarea vigente */}
          <article className="task-card on-time">
            <div>
              <h3>Ensayo de experiencia de usuario</h3>
              <p>Diseño de Interfaces · Vence en 2 días</p>
            </div>

            <span className="status status-on-time">
              EN 2 DÍAS
            </span>

            <a className="task-link" href="#">
              Ver tarea →
            </a>
          </article>

          {/* Tarea vigente */}
          <article className="task-card on-time">
            <div>
              <h3>Ejercicios capítulo 6</h3>
              <p>Bases de Datos · Vence el viernes</p>
            </div>

            <span className="status status-on-time">
              VIERNES
            </span>

            <a className="task-link" href="#">
              Ver tarea →
            </a>
          </article>
        </section>

        {/* Información secundaria */}
        <section className="secondary-content">
          <article className="info-card">
            <h2>Evaluaciones esta semana</h2>

            <div className="evaluation">
              <strong>Parcial de Bases de Datos</strong>
              <span>Miércoles · 10:00</span>
            </div>

            <div className="evaluation">
              <strong>Quiz de Programación Web</strong>
              <span>Viernes · 08:00</span>
            </div>
          </article>

          <article className="info-card">
            <h2>Avisos recientes</h2>

            <div className="notice">
              <strong>
                Cambio de aula · Diseño de Interfaces
              </strong>
              <span>Hace 2 horas</span>
            </div>

            <div className="notice">
              <strong>
                Nuevo material disponible en Programación Web
              </strong>
              <span>Ayer</span>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;