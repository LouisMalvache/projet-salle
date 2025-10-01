// ==========================================
// FITAPP - JavaScript Principal
// ==========================================

// ==========================================
// 1. NAVIGATION ACTIVE
// ==========================================
/**
 * Active automatiquement le lien de navigation correspondant à la page actuelle
 */
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// ==========================================
// 2. DONNÉES DES EXERCICES (Images)
// ==========================================
const exerciseImages = {
  // Épaules
  "Développé militaire": "images/epaule_dev_militaire_smith.png",
  "Élévations frontales": "images/epaule_elevations_frontales.png",
  "Élévations latérales": "images/epaule_elevations_laterales.png",
  "Shrugs": "images/epaule_shrugs.png",
  // Biceps
  "Curl barre": "images/biceps_curl_barre.png",
  "Curl haltères": "images/biceps_curl_halteres.png",
  "Curl haltères incliné": "images/biceps_curl_halteres.png",
  // Triceps
  "Barre au front": "images/triceps_barre_front.png",
  "Extension corde": "images/triceps_extension_verticale_poulie_haute.png",
  "Dips": "images/triceps_dips.png",
  "Pompes": "images/pectoraux_pompes.png",
  // Pectoraux
  "Développé couché": "images/pectoraux_dev_couche_smith.png",
  "Développé incliné": "images/pectoraux_dev_incline.png",
  "Développé incliné haltères": "images/pectoraux_dev_incline.png",
  "Écarté poulie": "images/pectoraux_pec-deck.png",
  // Dos
  "Traction": "images/dos_traction.png",
  "Tirage horizontal": "images/dos_tirage_horizontal_poulie.png",
  "Tirage vertical": "images/dos_tirage_vertical.png",
  "Rowing barre": "images/dos_rowing_barre.png",
  "Rowing haltères": "images/dos_rowing_halteres.png",
  "Soulevé de terre": "images/dos_souleve_terre.png",
  // Abdominaux
  "Relevé de genoux suspendu": "images/abdominaux_releve_genoux_suspendu.png",
  "Planche": "images/abdominaux_planche.png",
  // Jambes
  "Squat": "img/squat.gif",
  "Presse à cuisses": "img/presse-a-cuisses-inclinee.gif",
  "Leg extension": "img/leg-extension.gif"
};

// ==========================================
// 3. DONNÉES DES PROGRAMMES
// ==========================================
const programs = {
  "2days": {
    title: "Programme 2 Jours - Full Body",
    description: "Deux séances complètes pour travailler tout le corps",
    sessions: [
      {
        day: "Jour 1 - Full Body A",
        muscle: "Corps Complet",
        exercises: [
          { name: "Squat", sets: "4×8-10" },
          { name: "Développé couché", sets: "4×8-10" },
          { name: "Rowing barre", sets: "4×8-10" },
          { name: "Développé militaire", sets: "3×10-12" },
          { name: "Curl barre", sets: "3×10-12" },
          { name: "Extension corde", sets: "3×10-12" },
          { name: "Relevé de genoux suspendu", sets: "3×max" }
        ]
      },
      {
        day: "Jour 2 - Full Body B",
        muscle: "Corps Complet",
        exercises: [
          { name: "Soulevé de terre", sets: "4×6-8" },
          { name: "Développé incliné", sets: "4×8-10" },
          { name: "Traction", sets: "4×8-10" },
          { name: "Élévations frontales", sets: "3×12-15" },
          { name: "Curl haltères", sets: "3×10-12" },
          { name: "Pompes", sets: "3×max" },
          { name: "Planche", sets: "3×30-60s" }
        ]
      }
    ]
  },
  "3days": {
    title: "Programme 3 Jours - Push Pull Legs",
    description: "Split classique pour une progression optimale",
    sessions: [
      {
        day: "Jour 1 - Push (Pectoraux/Épaules/Triceps)",
        muscle: "Poussée",
        exercises: [
          { name: "Développé couché", sets: "4×8-10" },
          { name: "Développé incliné haltères", sets: "4×8-10" },
          { name: "Écarté poulie", sets: "3×12-15" },
          { name: "Développé militaire", sets: "4×8-10" },
          { name: "Élévations latérales", sets: "3×12-15" },
          { name: "Barre au front", sets: "3×10-12" },
          { name: "Extension corde", sets: "3×12-15" }
        ]
      },
      {
        day: "Jour 2 - Pull (Dos/Biceps)",
        muscle: "Traction",
        exercises: [
          { name: "Soulevé de terre", sets: "4×6-8" },
          { name: "Traction", sets: "4×8-10" },
          { name: "Tirage horizontal", sets: "4×8-10" },
          { name: "Tirage vertical", sets: "3×10-12" },
          { name: "Shrugs", sets: "3×12-15" },
          { name: "Curl barre", sets: "4×8-12" },
          { name: "Curl haltères", sets: "3×10-12" }
        ]
      },
      {
        day: "Jour 3 - Legs (Jambes/Abdos)",
        muscle: "Jambes",
        exercises: [
          { name: "Squat", sets: "4×8-10" },
          { name: "Presse à cuisses", sets: "4×10-12" },
          { name: "Leg extension", sets: "3×12-15" },
          { name: "Relevé de genoux suspendu", sets: "3×max" },
          { name: "Planche", sets: "3×30-60s" }
        ]
      }
    ]
  },
  "4days": {
    title: "Programme 4 Jours - Upper Lower",
    description: "Haute fréquence pour chaque groupe musculaire",
    sessions: [
      {
        day: "Jour 1 - Upper A (Haut du corps)",
        muscle: "Haut du corps",
        exercises: [
          { name: "Développé couché", sets: "4×6-8" },
          { name: "Tirage horizontal", sets: "4×6-8" },
          { name: "Développé militaire", sets: "3×8-10" },
          { name: "Traction", sets: "3×8-10" },
          { name: "Écarté poulie", sets: "3×10-12" },
          { name: "Curl barre", sets: "3×10-12" },
          { name: "Extension corde", sets: "3×10-12" }
        ]
      },
      {
        day: "Jour 2 - Lower A (Bas du corps)",
        muscle: "Bas du corps",
        exercises: [
          { name: "Squat", sets: "4×6-8" },
          { name: "Soulevé de terre", sets: "4×8-10" },
          { name: "Presse à cuisses", sets: "3×10-12" },
          { name: "Leg extension", sets: "3×12-15" },
          { name: "Relevé de genoux suspendu", sets: "3×max" }
        ]
      },
      {
        day: "Jour 3 - Upper B (Haut du corps)",
        muscle: "Haut du corps",
        exercises: [
          { name: "Développé incliné", sets: "4×8-10" },
          { name: "Rowing haltères", sets: "4×8-10" },
          { name: "Élévations latérales", sets: "3×10-12" },
          { name: "Tirage vertical", sets: "3×10-12" },
          { name: "Écarté poulie", sets: "3×12-15" },
          { name: "Curl haltères", sets: "3×10-12" },
          { name: "Dips", sets: "3×8-12" }
        ]
      },
      {
        day: "Jour 4 - Lower B (Bas du corps)",
        muscle: "Bas du corps",
        exercises: [
          { name: "Squat", sets: "4×8-10" },
          { name: "Soulevé de terre", sets: "4×6-8" },
          { name: "Presse à cuisses", sets: "3×10-12" },
          { name: "Leg extension", sets: "3×12-15" },
          { name: "Planche", sets: "3×30-60s" }
        ]
      }
    ]
  },
  "5days": {
    title: "Programme 5 Jours - Split Classique",
    description: "Volume maximal avec spécialisation par groupe musculaire",
    sessions: [
      {
        day: "Jour 1 - Pectoraux",
        muscle: "Pectoraux",
        exercises: [
          { name: "Développé couché", sets: "4×6-8" },
          { name: "Développé incliné", sets: "4×8-10" },
          { name: "Développé incliné haltères", sets: "3×8-10" },
          { name: "Écarté poulie", sets: "3×10-12" },
          { name: "Écarté poulie", sets: "3×12-15" },
          { name: "Pompes", sets: "3×max" }
        ]
      },
      {
        day: "Jour 2 - Dos",
        muscle: "Dos",
        exercises: [
          { name: "Soulevé de terre", sets: "4×5-6" },
          { name: "Traction", sets: "4×8-10" },
          { name: "Tirage vertical", sets: "4×8-10" },
          { name: "Rowing barre", sets: "3×10-12" },
          { name: "Tirage vertical", sets: "3×10-12" },
          { name: "Tirage horizontal", sets: "3×12-15" }
        ]
      },
      {
        day: "Jour 3 - Épaules",
        muscle: "Épaules",
        exercises: [
          { name: "Développé militaire", sets: "4×6-8" },
          { name: "Développé militaire", sets: "4×8-10" },
          { name: "Élévations latérales", sets: "4×12-15" },
          { name: "Élévations frontales", sets: "3×10-12" },
          { name: "Élévations latérales", sets: "4×12-15" },
          { name: "Shrugs", sets: "3×12-15" }
        ]
      },
      {
        day: "Jour 4 - Jambes",
        muscle: "Jambes",
        exercises: [
          { name: "Squat", sets: "5×5" },
          { name: "Presse à cuisses", sets: "4×8-10" },
          { name: "Leg extension", sets: "4×12-15" }
        ]
      },
      {
        day: "Jour 5 - Bras/Abdos",
        muscle: "Bras & Abdos",
        exercises: [
          { name: "Curl barre", sets: "4×8-10" },
          { name: "Barre au front", sets: "4×8-10" },
          { name: "Curl haltères", sets: "3×10-12" },
          { name: "Extension corde", sets: "3×10-12" },
          { name: "Curl haltères incliné", sets: "3×12-15" },
          { name: "Dips", sets: "3×10-12" },
          { name: "Relevé de genoux suspendu", sets: "4×max" },
          { name: "Planche", sets: "3×30s/side" }
        ]
      }
    ]
  }
};

// ==========================================
// 4. FONCTIONS PROGRAMMES
// ==========================================
/**
 * Affiche/masque l'image d'un exercice
 */
function toggleExerciseImage(button, exerciseName) {
  const item = button.closest('.exercise-item');
  const statsSpan = item.querySelector('.exercise-stats');
  let imageContainer = item.querySelector('.exercise-image-container');

  const imageUrl = exerciseImages[exerciseName];
  if (!imageUrl) {
    console.error(`Image URL not found for: ${exerciseName}`);
    alert(`Image non trouvée pour : ${exerciseName}`);
    return;
  }

  if (!imageContainer) {
    imageContainer = document.createElement('div');
    imageContainer.classList.add('exercise-image-container');
    item.appendChild(imageContainer);
  }

  if (button.classList.contains('active-show')) {
    imageContainer.style.display = 'none';
    statsSpan.style.display = 'inline';
    button.classList.remove('active-show');
    button.innerHTML = '<i class="bi bi-image"></i>';
  } else {
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Illustration de ${exerciseName}" class="exercise-preview-img">`;
    imageContainer.style.display = 'flex';
    statsSpan.style.display = 'none';
    button.classList.add('active-show');
    button.innerHTML = '<i class="bi bi-x-lg"></i>';
  }
}

/**
 * Affiche les détails d'un programme
 */
function showProgramDetails(programKey) {
  const program = programs[programKey];
  if (!program) return;

  const programTitle = document.getElementById('program-title');
  const daysContainer = document.getElementById('days-container');
  const programSelection = document.getElementById('program-selection');
  const sessionDetails = document.getElementById('session-details');

  programTitle.textContent = program.title;

  let daysHtml = '';
  program.sessions.forEach(session => {
    daysHtml += `
      <div class="day-card">
        <h4><i class="fas fa-calendar-day me-2"></i>${session.day}</h4>
        <p class="text-muted">Objectif : ${session.muscle}</p>
        <h5><i class="fas fa-dumbbell me-2"></i>Exercices</h5>
    `;

    session.exercises.forEach(exercise => {
      const hasImage = exerciseImages.hasOwnProperty(exercise.name);
      const imageButtonHtml = hasImage ?
        `<button type="button" class="btn btn-sm btn-image-toggle" onclick="toggleExerciseImage(this, '${exercise.name.replace(/'/g, "\\'")}')">
          <i class="bi bi-image"></i>
        </button>` : '';

      daysHtml += `
        <div class="exercise-item" data-exercise="${exercise.name}">
          <span class="exercise-name">${exercise.name}</span>
          <div class="exercise-right-side">
            ${imageButtonHtml}
            <span class="exercise-stats">${exercise.sets}</span>
          </div>
        </div>
      `;
    });

    daysHtml += `</div>`;
  });

  if (program.sessions.length < 7) {
    daysHtml += `
      <div class="rest-note text-center">
        <i class="fas fa-bed me-2"></i> N'oubliez pas l'importance de la récupération ! Les jours restants sont des jours de repos ou de cardio léger.
      </div>
    `;
  }

  daysContainer.innerHTML = daysHtml;
  programSelection.classList.add('d-none');
  sessionDetails.classList.remove('d-none');
  sessionDetails.classList.add('fade-in');

  window.scrollTo({
    top: sessionDetails.offsetTop - 100,
    behavior: 'smooth'
  });
}

/**
 * Retourne à la sélection des programmes
 */
function backToPrograms() {
  const sessionDetails = document.getElementById('session-details');
  const programSelection = document.getElementById('program-selection');

  sessionDetails.classList.remove('fade-in');
  sessionDetails.classList.add('d-none');
  programSelection.classList.remove('d-none');

  window.scrollTo({
    top: programSelection.offsetTop - 100,
    behavior: 'smooth'
  });
}

/**
 * Initialise les événements de la page programmes
 */
function initProgramsPage() {
  const programCards = document.querySelectorAll('.program-card');
  
  programCards.forEach(card => {
    card.addEventListener('click', () => {
      const programKey = card.dataset.program;
      showProgramDetails(programKey);
    });
  });

  // Rendre les fonctions accessibles globalement
  window.backToPrograms = backToPrograms;
  window.toggleExerciseImage = toggleExerciseImage;
}

// ==========================================
// 5. INITIALISATION AU CHARGEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // Active la navigation sur toutes les pages
  initActiveNav();

  // Initialise les programmes si on est sur la page programmes
  if (document.getElementById('program-selection')) {
    initProgramsPage();
  }
});