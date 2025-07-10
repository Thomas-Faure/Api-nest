# Routes de Calculs Mathématiques

J'ai ajouté un contrôleur dédié aux calculs mathématiques avec plusieurs opérations disponibles.

## Fichiers créés/modifiés

- `src/math.controller.ts` - Contrôleur avec toutes les routes mathématiques
- `src/math.service.ts` - Service contenant la logique des calculs
- `src/math.controller.spec.ts` - Tests unitaires pour le contrôleur
- `src/app.module.ts` - Mis à jour pour inclure le nouveau contrôleur et service

## Routes disponibles

### Opérations de base (GET)

#### Addition
```
GET /math/add?a=5&b=3
```
Réponse : `{ "result": 8, "operation": "5 + 3" }`

#### Soustraction
```
GET /math/subtract?a=10&b=4
```
Réponse : `{ "result": 6, "operation": "10 - 4" }`

#### Multiplication
```
GET /math/multiply?a=6&b=7
```
Réponse : `{ "result": 42, "operation": "6 × 7" }`

#### Division
```
GET /math/divide?a=15&b=3
```
Réponse : `{ "result": 5, "operation": "15 ÷ 3" }`

#### Puissance
```
GET /math/power?base=2&exponent=3
```
Réponse : `{ "result": 8, "operation": "2^3" }`

#### Racine carrée
```
GET /math/sqrt?number=9
```
Réponse : `{ "result": 3, "operation": "√9" }`

#### Factorielle
```
GET /math/factorial?number=5
```
Réponse : `{ "result": 120, "operation": "5!" }`

#### Fibonacci
```
GET /math/fibonacci?n=7
```
Réponse : `{ "result": [0, 1, 1, 2, 3, 5, 8], "operation": "Fibonacci(7)" }`

### Opérations avancées (POST)

#### Calcul simple via POST
```
POST /math/calculate
Content-Type: application/json

{
  "a": 10,
  "b": 5
}
```
Réponse : `{ "result": 15, "operation": "10 + 5" }`

#### Moyenne
```
POST /math/advanced/mean
Content-Type: application/json

{
  "numbers": [1, 2, 3, 4, 5]
}
```
Réponse : `{ "result": 3, "operation": "Moyenne de [1, 2, 3, 4, 5]" }`

#### Médiane
```
POST /math/advanced/median
Content-Type: application/json

{
  "numbers": [1, 3, 2, 5, 4]
}
```
Réponse : `{ "result": 3, "operation": "Médiane de [1, 3, 2, 5, 4]" }`

## Gestion des erreurs

Le service inclut une validation robuste :
- Vérification que les paramètres sont des nombres valides
- Protection contre la division par zéro
- Validation des nombres négatifs pour la racine carrée
- Limites pour éviter les calculs trop coûteux (factorielle > 170, Fibonacci > 100)
- Messages d'erreur en français

## Exemples d'utilisation

### Avec curl

```bash
# Addition simple
curl "http://localhost:3000/math/add?a=5&b=3"

# Calcul de moyenne
curl -X POST "http://localhost:3000/math/advanced/mean" \
  -H "Content-Type: application/json" \
  -d '{"numbers": [10, 20, 30, 40, 50]}'

# Fibonacci
curl "http://localhost:3000/math/fibonacci?n=10"
```

### Format de réponse standard

Toutes les routes retournent un objet JSON avec :
- `result` : Le résultat du calcul
- `operation` : Une description lisible de l'opération effectuée

## Tests

Un fichier de tests complet a été créé (`math.controller.spec.ts`) pour valider toutes les fonctionnalités.

Pour lancer les tests :
```bash
npm test
```