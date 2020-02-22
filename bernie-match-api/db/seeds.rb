# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.create([
    {
        name: 'Disappointed',
        front: 'img/BernieDisappointed.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'Happy',
        front: 'img/BernieHappy.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'Mad',
        front: 'img/BernieMad.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'Sad',
        front: 'img/BernieSad.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'Scared',
        front: 'img/BernieScared.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'Shocked',
        front: 'img/BernieShocked.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'Unsure',
        front: 'img/BernieUnsure.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    },
    {
        name: 'VeryHappy',
        front: 'img/BernieVeryHappy.jpg',
        back: 'img/AmerFlagBackCard.jpg',
    }
])
