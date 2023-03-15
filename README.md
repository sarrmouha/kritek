Symfony Invoice Application
========================

Requirements
------------

  * PHP 8.1.0 or higher;

Installation
------------


```bash
$ cd symfony-app/
$ composer install
$ php bin/console doctrine:database:create
$ php bin/console doctrine:migrations:migrate
$ php -S localhost:8000 -t public/
```

ReactJs CRUD Application
========================

Installation
------------

Setup:
```bash
$ cd crud-app/
run npm i && npm run start:all for both client and server side to start the development server
```