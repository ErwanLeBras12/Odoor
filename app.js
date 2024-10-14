const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

// Configuration des sessions
app.use(session({
  secret: 'secretKey123',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

// Définir le moteur de vues
app.set('view engine', 'ejs');

// Fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour vérifier l'authentification
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// Route pour la page de connexion
app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Gestion de la soumission du formulaire de connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const USERNAME = 'admin';
  const PASSWORD = 'password123';

  if (username === USERNAME && password === PASSWORD) {
    req.session.user = username;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Nom d\'utilisateur ou mot de passe incorrect.' });
  }
});

// Route pour la page protégée (index.html)
app.get('/', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour la déconnexion
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/');
    }
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
