import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './project.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Python Train Project',
      description:
        'Built a Python-based system to process and categorize train-related data, emphasizing automation and clean data pipelines.',
      technologies: ['Python'],
      githubLink: 'https://github.com/SunrutNariya/Python_train.git',
    },
    {
      id: 2,
      title: 'Flask Log Management System',
      description:
        'Designed a logs management web app using Flask with routing, Jinja templates, and SQL database integration to query and visualize logs.',
      technologies: ['Python', 'Flask', 'SQLite'],
      githubLink: 'https://github.com/SunrutNariya/fask_project_log_managment.git',
    },
    {
      id: 3,
      title: 'Face Detection Project',
      description:
        'Implemented a face detection system using OpenCV, focusing on real-time detection and preprocessing techniques.',
      technologies: ['Python', 'OpenCV'],
      githubLink: 'https://github.com/SunrutNariya/opencv_face-detection.git',
    },
    {
      id: 4,
      title: 'Easy Name Generator',
      description:
        'Created a generator that produces human-friendly names for apps and projects using simple language models and grammar rules.',
      technologies: ['Python'],
      githubLink: 'https://github.com/SunrutNariya/name_generator_easily.git',
    },
  ];

  return (
    <div className="App dark-theme">
      <Navigation />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section
          id="home"
          className="hero-section min-vh-100 d-flex align-items-center"
        >
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <img
                  src={process.env.PUBLIC_URL + '/profile.jpg'}
                  alt="Shunrut Nariya"
                  className="rounded-circle mb-4"
                  style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h1 className="display-4 fw-bold mb-4">
                  Hi, I'm <span className="text-primary">SHUNRUT</span>
                </h1>
                <p className="lead mb-4">
                  Enthusiastic and dedicated AI fresher with a solid foundation in programming, software development, and problem-solving. Skilled in Python, Flask, OpenCV, SQL, and data analysis. Passionate about building scalable and user-focused solutions with strong communication and adaptability.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Container>
            <h2 className="text-center mb-5">My Projects</h2>
            <Row className="justify-content-center">
              {projects.map((project, idx) => (
                <Col lg={6} key={project.id} className="mb-4">
                  <Card className="project-card">
                    <Card.Body className="p-4">
                      <div className="project-content">
                        <div className="project-icon-wrapper">
                          <span className="project-icon-bg">
                            {getProjectIcon(project.title)}
                          </span>
                        </div>
                        <Card.Title className="project-title" title={project.title}>
                          {project.title}
                        </Card.Title>
                        <Card.Text className="project-desc">
                          {project.description}
                        </Card.Text>
                        <div className="tech-stack">
                          <h6 className="tech-title">Technologies Used</h6>
                          <div className="badge-container">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="tech-badge"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="project-actions">
                          {project.githubLink && (
                            <Card.Link
                              href={project.githubLink}
                              target="_blank"
                              className="action-button primary-button"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg>
                              View Project
                            </Card.Link>
                          )}
                          {project.live && (
                            <Card.Link
                              href={project.live}
                              target="_blank"
                              className="action-button secondary-button"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                              </svg>
                              Live Demo
                            </Card.Link>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function getProjectTheme(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('kalaa')) return 'kalaa';
  if (titleLower.includes('audit')) return 'audit';
  if (titleLower.includes('schedule')) return 'schedule';
  if (titleLower.includes('cloud')) return 'cloud';
  return 'default';
}

function getProjectIcon(title) {
  const t = title.toLowerCase();
  if (t.includes('python')) return '🐍';
  if (t.includes('flask')) return '🧪';
  if (t.includes('face')) return '👤';
  if (t.includes('name')) return '🔤';
  if (t.includes('cloud')) return '☁️';
  return '📦';
}

export default App;
