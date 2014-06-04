'use strict';

angular.module('hciApp')
  .controller('ExplorarCtrl', function ($scope) {
    
    $scope.map = {
      center: {
        latitude: -23.6824124,
        longitude: -46.5952992
      },
      zoom: 11
    };

    $scope.projetos = [
      {
        title: 'Professor de Violão',
        description: '2 horas por semana de manhã ou tarde',
        ong: 'ONG Brincar',
        image: 'professor.png',
        color: 'red'
      },
      {
        title: 'Terapia Musical',
        description: '5 horas por semana a noite',
        ong: 'ONG AABC',
        image: 'terapia.png',
        color: 'blue'
      },
      {
        title: 'Afinar piano das crianças',
        description: '2 horas, horário flexivel',
        ong: 'ONG Educação',
        image: 'afinar.png',
        color: 'green'
      },
      {
        title: 'Atração festa de encerramento',
        description: '25/06/2014',
        ong: 'ONG Abrigo Feliz',
        image: 'festa.png',
        color: 'orange'
      }
    ];
  });
