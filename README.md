<div>
  <h1 align="center">
    <a href="https://github.com/armandwadji/initiation-TDD.git">TDD (Test Driven Development) 🧪
    </a>  
  </h1>
</div> 

## Configuration requise

- [git][git]
- [NodeJS][node]
- [npm][npm]

## Installation
Après avoir installé les configurations du projet, vous pouvez executer cette commande pour installer le projet en local su votre machine :

```
git clone https://github.com/armandwadji/React-World.git
```

Ensuite il faudra installer les dépendances du projet avec la commande suivante :

```
npm install
```

## Importer en module Ecmascript 6
Installer babel  et types/jest dans les dev dependancies
```
npm i -D "@types/jest"
npm i -D babel-jest @babel/core @babel/preset-env
npm i -D babel-plugin-transform-es2015-modules-commonjs
```

créer un fichier .babelrc et y insérer les commandes suivantes :
```
{
    "env": {
        "test":{
            "plugins": ["transform-es2015-modules-commonjs"]
        }
    }
}
```

Dans le sricpt du fichier package.json insérer la commande suivante :
```
"test": "jest --watchAll --verbose",
```

Enfin dans le terminal tapez la commande suivante :
```
npm run test
```

<p align="right">Back to top : 
  <a href="#top">
    ☝
  </a>
</p>

<h1 align="center">Bon Code 🖥 💻 📱</h1>

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
<!-- prettier-ignore-end -->
