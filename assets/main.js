document.addEventListener('DOMContentLoaded', function () {
  setIcon(document.documentElement.getAttribute('data-theme') || 'light');
});

function toggleTheme() {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  setIcon(next);
}

function setIcon(theme) {
  var suns  = document.querySelectorAll('.icon-sun');
  var moons = document.querySelectorAll('.icon-moon');
  suns.forEach(function(el) { el.style.display = theme === 'dark' ? 'block' : 'none'; });
  moons.forEach(function(el) { el.style.display = theme === 'dark' ? 'none' : 'block'; });
}

/* Mobile menu */
function openMenu() {
  document.querySelector('.sidebar').classList.add('open');
  document.querySelector('.sidebar-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.querySelector('.sidebar').classList.remove('open');
  document.querySelector('.sidebar-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* Close menu on nav link click (mobile) */
document.addEventListener('click', function(e) {
  if (e.target.closest('.sidebar .nav-link')) {
    closeMenu();
  }
});

/* Fetch GitHub repos */
function loadGitHubRepos(username, containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var langColors = {
    'Java': '#b07219',
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C#': '#239120',
    'Ruby': '#701516'
  };

  fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=30')
    .then(function(res) { return res.json(); })
    .then(function(repos) {
      var filtered = repos.filter(function(r) {
        return !r.fork && r.name !== '.github';
      });
      container.innerHTML = '';
      filtered.forEach(function(repo, i) {
        var color = langColors[repo.language] || '#8c857e';
        var desc = repo.description || 'No description';
        var el = document.createElement('a');
        el.href = repo.html_url;
        el.target = '_blank';
        el.rel = 'noreferrer';
        el.className = 'github-repo fade-in';
        el.style.animationDelay = (i * 0.04) + 's';
        el.innerHTML =
          '<div class="github-repo-name">' +
            '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>' +
            repo.name +
          '</div>' +
          '<div class="github-repo-desc">' + desc + '</div>' +
          '<div class="github-repo-meta">' +
            (repo.language ? '<span><span class="lang-dot" style="background:' + color + '"></span>' + repo.language + '</span>' : '') +
          '</div>';
        container.appendChild(el);
      });
    })
    .catch(function() {
      container.innerHTML = '<p style="color:var(--subtle);font-size:13px;">Could not load repositories.</p>';
    });
}
