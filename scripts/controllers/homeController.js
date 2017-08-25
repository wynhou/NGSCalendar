CalendarApp.controller('homeController', function homeController($scope, $http, $rootScope, $location, $uibModal, localStorageService, $timeout, uiCalendarConfig, $compile, $log) {
  $scope.m = {};
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  $('.sidebar').height(($(window).height() - 300));
  var y = date.getFullYear();
  $scope.resources = {};
  $scope.calView = "week";
  $scope.one = true;
  $scope.two = true;
  $scope.three = true;
  $scope.four = false;
  $scope.five = true;
  $scope.six = true;
  $scope.m.selectedEvent = {};
  $scope.m.selectedEvent.taskType = 'jobTask';
  $scope.assignedResource = [];
  $scope.groupstep = null;
  $scope.status = {
    events: true,
    division: true
  };
  $scope.m.jobs = [
    'wtr-123', 'wtr-111', 'wtr-333'
  ];

  $scope.m.searchItems = [
    'wtr-123', 'wtr-111', 'wtr-333',
    'wtr-123', 'wtr-111', 'wtr-333'
  ];


  $scope.resources.equipments = [{
    title: 'Cleaner',
    selected: false
  }, {
    title: 'dehydrator 1',
    selected: false
  }, {
    title: 'dehydrator 2',
    selected: false
  }, {
    title: 'dehydrator 3',
    selected: false
  }, {
    title: 'dehydrator 4',
    selected: false
  }, ];


  /* event source that contains custom events on the scope */

  $scope.jobTasks = [{
    title: 'wtr-123',
    selected: false
  }, {
    title: 'wtr-111',
    selected: false
  }, {
    title: 'wtr-222',
    selected: false
  }, {
    title: 'wtr-333',
    selected: false
  }, {
    title: 'wall-123',
    selected: false
  }, {
    title: 'wtr-555',
    selected: false
  }, {
    title: 'wall-222',
    selected: false
  }];

  $scope.marketingTasks = [{
    title: 'Marketing Meeting',
    selected: false
  }, {
    title: 'Management Meeting',
    selected: false
  }, {
    title: 'Client Meeting',
    selected: false
  }];

  $scope.productionTasks = [{
    title: 'wtr-5552',
    selected: false
  }, {
    title: 'wtr-1232',
    selected: false
  }];

  $scope.participants = [{
    title: 'Jimmy Dre',
    partid: 1,
    color: "#28508d",
    selected: false
  }, {
    title: 'Wendel Iovine',
    partid: 2,
    color: "#41b778",
    selected: false
  }];

  $scope.equipments = [{
    title: 'Cleaner',
    selected: false
  }, {
    title: 'dehydrator 1',
    selected: false
  }, {
    title: 'dehydrator 2',
    selected: false
  }, {
    title: 'dehydrator 3',
    selected: false
  }, {
    title: 'dehydrator 4',
    selected: false
  }, ];
  $scope.resources.employees = [{
    title: 'Dion Smith',
    id: 1,
    color: "#8d2828",
    selected: false
  }, {
    title: 'Blair Hacche',
    id: 2,
    color: "#28508d",
    selected: false
  }, {
    title: 'Wyn Hou',
    id: 3,
    color: "#41b778",
    selected: false
  }, {
    title: 'Alex Godlewski',
    id: 4,
    color: "#b7a241",
    selected: false
  }, {
    title: 'Matt Bell',
    id: 5,
    color: "#7341b7",
    selected: false
  }, {
    title: 'Joseph Nieh',
    id: 6,
    color: "#41b781",
    selected: false
  }, {
    title: 'Adam Grace',
    id: 7,
    color: "#62b741",
    selected: false
  }];

  $scope.employees = [{
    title: 'Dion Smith',
    userid: 1,
    color: "#8d2828",
    selected: false
  }, {
    title: 'Blair Hacche',
    userid: 2,
    color: "#28508d",
    selected: false
  }, {
    title: 'Wyn Hou',
    userid: 3,
    color: "#41b778",
    selected: false
  }, {
    title: 'Alex Godlewski',
    userid: 4,
    color: "#b7a241",
    selected: false
  }, {
    title: 'Matt Bell',
    userid: 5,
    color: "#7341b7",
    selected: true
  }, {
    title: 'Joseph Nieh',
    userid: 6,
    color: "#41b781",
    selected: false
  }, {
    title: 'Adam Grace',
    userid: 7,
    color: "#62b741",
    selected: false
  }];

  $scope.groups = [{
    title: 'Team Canada',
    color: '#FF5151',
    groupid: 1,
    children: [1, 2, 3, 4],
    selected: false
  }, {
    title: 'Team Blue',
    color: '#4AA2FF',
    groupid: 2,
    children: [5, 6, 7],
    selected: false
  }];
  $scope.divisions = [{
    title: 'Bio Hazard',
    color: '#FF5151',
    url: 'Div_BioHazard.png',
    divid: 1,
    selected: false
  }, {
    title: 'Carpet Cleaning',
    color: '#FF5151',
    url: 'Div_CarpetCleaning.png',
    divid: 2,
    selected: false
  }, {
    title: 'Consulting',
    color: '#FF5151',
    url: 'Div_Consulting.png',
    divid: 3,
    selected: false
  }, {
    title: 'Contents',
    color: '#FF5151',
    url: 'Div_Contents.png',
    divid: 4,
    selected: false
  }, {
    title: 'Default',
    color: '#FF5151',
    url: 'Div_Default.png',
    divid: 5,
    selected: false
  }, {
    title: 'Fire Damage',
    color: '#FF5151',
    url: 'Div_FireDamage2.png',
    divid: 6,
    selected: false
  }, {
    title: 'Furniture Restoration',
    color: '#FF5151',
    url: 'Div_FurnitureRestoration.png',
    divid: 7,
    selected: false
  }, {
    title: 'Hoarding',
    color: '#FF5151',
    url: 'Div_Hoarding.png',
    divid: 8,
    selected: false
  }, {
    title: 'HVAC',
    color: '#FF5151',
    url: 'Div_HVAC.png',
    divid: 9,
    selected: false
  }, {
    title: 'Janitorial',
    color: '#FF5151',
    url: 'Div_Janitorial.png',
    divid: 10,
    selected: false
  }, {
    title: 'Mold Remediation',
    color: '#FF5151',
    url: 'Div_MoldRemediation.png',
    divid: 11,
    selected: false
  }, {
    title: 'Res Com Services',
    color: '#FF5151',
    url: 'Div_Res-ComServices.png',
    divid: 12,
    selected: false
  }, {
    title: 'Structural Cleaning',
    color: '#FF5151',
    url: 'Div_StructuralCleaning.png',
    divid: 13,
    selected: false
  }, {
    title: 'Structural Repairs',
    color: '#FF5151',
    url: 'Div_StructuralRepairs.png',
    divid: 8,
    selected: false
  }, {
    title: 'Trauma',
    color: '#FF5151',
    url: 'Div_Trauma.png',
    divid: 8,
    selected: false
  }, {
    title: 'Temporary Services',
    color: '#FF5151',
    url: 'Div_TemporaryServices.png',
    divid: 8,
    selected: false
  }, {
    title: 'Water Mitigation',
    color: '#FF5151',
    url: 'Div_WaterMitigation.png',
    divid: 8,
    selected: false
  }];
  $scope.events = [];
  $scope.events.events = [];
  // $scope.events = {
  //   events: [{
  //       id: 1,
  //       title: 'WTR-231',
  //       type: 'job-event',
  //       start: new Date(y, m, 1),
  //       className: "job-event"
  //     },
  //     {
  //       id: 2,
  //       title: 'Marketing Meeting',
  //       type: 'marketing-event',
  //       start: new Date(y, m, d - 5),
  //       end: new Date(y, m, d - 2),
  //       className: "marketing-event"
  //     },
  //     {
  //       id: 3,
  //       title: 'Scrum Meeting',
  //       type: 'calendar-event',
  //       start: new Date(y, m, 3, 10, 0),
  //       allDay: false,
  //       className: "calendar-event"
  //     },
  //     {
  //       id: 4,
  //       title: 'Repeating Event',
  //       type: 'calendar-event',
  //       start: new Date(y, m, d + 4, 10, 0),
  //       allDay: false,
  //       className: "calendar-event"
  //
  //     },
  //
  //   ],
  // }

  /* event source that calls a function on every view switch */
  $scope.eventsF = function(start, end, timezone, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
    var events = [{
      title: 'Feed Me ' + m,
      start: s + (50000),
      end: s + (100000),
      allDay: false,
      className: ['customFeed']
    }];
    callback(events);
  };

  $scope.removeGroupItems = function(index) {
    //console.log(index)
    //  console.log($scope.events);
    console.log($scope.events);
    console.log(index);
    //
    // for (var i = 0, tot = $scope.events.length; i < tot; i++) {
    //   //console.log(myArray[i]); //"aa", "bb"
    //   console.log($scope.events[i]);
    //   console.log($scope.events[i].userid)
    //   if (index == 1 && ($scope.events[i].userid == 1 || $scope.events[i].userid == 2 || $scope.events[i].userid == 3 || $scope.events[i].userid == 4)) {
    //
    //     console.log('splice ' + i)
    //     $scope.events.splice(i, 1);
    //   }
    // }
    //
    // angular.forEach($scope.events, function(value, key) {
    //   //  console.log('userid ' + value.userid)
    //   //    console.log('value ' + value)
    //
    //   if (index == 1 && (value.userid == 1 || value.userid == 2 || value.userid == 3 || value.userid == 4)) {
    //
    //     console.log('splice ' + key)
    //     $scope.events.splice(key, 1);
    //   }
    //   // else if (index == 2 && (value.userid == 5 || value.userid == 6 || value.userid == 7)) {
    //   //
    //   //   console.log('splice ' + key)
    //   //   $scope.events.splice(key, 1);
    //   // }
    //
    //   //
    //   // if (value.userid >= 1 && value.userid <= 4) {
    //   //
    //   //     $scope.events.splice(key, 1);
    //   // }
    //
    //
    // })
    // $scope.events = [];
    // $scope.eventSource = [];
    //
    // $scope.eventSources = [$scope.events];
    // $('#my-calendar').fullCalendar('removeEvents')
    // $('#my-calendar').fullCalendar('addEventSource', $scope.eventSources)

    alert('Feature Currently Unavailable');
    // console.log('finished');
    // console.log($scope.events);


  }


  $scope.removeEmployeeItems = function(userid) {

    $scope.eventSources = [$scope.events];
    $('#my-calendar').fullCalendar('removeEvents')
    $('#my-calendar').fullCalendar('addEventSource', $scope.eventSources)


  }
  $scope.$watch('groups', function(newValue, oldValue) {
    if (newValue != oldValue) {
      var found = false;
      //console.log('newValue');
      //console.log(newValue);

      angular.forEach(newValue, function(value, key) {

        if (value.selected) {
          if (value.groupid == 1) {
            $scope.m.teamCanadaEvents.forEach(function(value, key) {

              $scope.events.push(value);
            });


          }
          if (value.groupid == 2) {
            $scope.m.teamBlueEvents.forEach(function(value, key) {

              $scope.events.push(value);
            });


          }
          $scope.hasResource = true;
          found = true;
        }

        //  console.log($scope.events);
      })

      $scope.eventSources = [$scope.events];
      $('#my-calendar').fullCalendar('removeEvents')
      $('#my-calendar').fullCalendar('addEventSource', $scope.eventSources)



      if (!found) {

        //$scope.hasResource = false;
        found = false;

      }
    }
  }, true)





  $scope.$watch('employees', function(newValue, oldValue) {
    var found = false;
    if (newValue != oldValue) {
      angular.forEach(newValue, function(value, key) {
        if (value.selected == true) {

          switch (value.userid) {
            case 1:
              $scope.m.DionEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;
            case 2:
              $scope.m.BlairEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;
            case 3:
              $scope.m.WynEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;
            case 4:
              $scope.m.AlexEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;
            case 5:
              $scope.m.MattEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;
            case 6:
              $scope.m.JosephEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;
            case 7:
              $scope.m.AdamEvents.forEach(function(value, key) {
                $scope.events.push(value);
              });
              break;

          }


          $scope.hasResource = true;
          found = true;
        }
      })


      if (!found) {
        //$scope.hasResource = false;
        found = false;
      }
    }
  }, true)



  $scope.$watch('participants', function(newValue, oldValue) {
    var found = false;

    angular.forEach(newValue, function(value, key) {
      if (value.selected == true) {
        $scope.hasResource = true;
        found = true;
      }
    })




    if (!found) {
      //$scope.hasResource = false;
      found = false;
    }
  }, true)


  /* alert on eventClick */
  $scope.alertOnEventClick = function(date, jsEvent, view) {
    $scope.alertMessage = (date.type + ' was clicked ');

    $scope.m.openEventModal();
    //console.log(jsEvent);
    //console.log(view);
    //console.log(date);

  };
  $scope.dayClick = function(date) {
    $scope.alertMessage = (date.type + ' was clicked ');

    $scope.m.openEventModal();
    //console.log(jsEvent);
    //console.log(view);
    //console.log(date);

  };
  /* alert on Drop */
  $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
    $scope.alertMessage = ('Event Dropped to make dayDelta ' + delta);
  };
  /* alert on Resize */
  $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };
  /* add and removes an event source of choice */
  /* add custom event*/
  $scope.addEvent = function() {
    $scope.events.push({
      title: 'Open Sesame',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      stick: true,
      className: ['openSesame']
    });
  };
  /* remove event */
  $scope.remove = function(index) {
    $scope.events.splice(index, 1);
  };
  /* Change View */
  $scope.changeView = function(view, calendar) {
    $timeout(function() {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
    }, 0)
  };
  $scope.changeView('agendaWeek', 'myCalendar');
  /* Change View */
  $scope.renderCalendar = function(calendar) {
    $timeout(function() {
      if (uiCalendarConfig.calendars[calendar]) {
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    });
  };

  $scope.updateEvents = function() {

  }
  /* Render Tooltip */
  $scope.eventRender = function(event, element, view) {
    element.attr({
      // 'tooltip': event.title,
      // 'tooltip-append-to-body': true
      'popover-trigger': "'mouseenter'",
      'popover-popup-close-delay': 1000,
      'popover-popup-delay': 1000,
      'uib-popover-template': "'eventPopover.html'",
    });
    // console.log(element);
    // console.log(element.parentNode.nodeName)
    console.log($scope.toggleList)
    console.log(event)
    if (!$scope.m.toggleList) {
      if (event.color) {
        element.prepend("<b class='color-block' style='background:" + event.color + "'></b>");
      }
      if (event.type == "job-event")
        element.prepend("<b class='fa fa-gavel calendar-icon'></b>");
      if (event.type == "marketing-event") {
        //element.prepend("<div class='color-block'></span>");
        element.prepend("<b class='fa fa-line-chart calendar-icon'></b>");
      }
      if (event.type == "calendar-event")
        element.prepend("<b class='fa fa-calendar calendar-icon'></b>");
    }
    $compile(element)($scope);
  };
  $scope.m.manageGroupModal = function(event) {
    $scope.m.groupstep = null;
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'manageGroupModal.html',

      size: 'md',
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.values;
        }
      }
    });
  }
  $scope.m.addEventModal = function(event) {
    $scope.step = null;
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'eventModal.html',

      size: 'lg',
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.values;
        }
      }
    });
  }
  $scope.m.openEventModal = function(event) {
    $scope.step = 0;
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'eventModal.html',

      size: 'lg',
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.values;
        }
      }
    });
  }
  /* config object */
  $scope.m.resources = [{
        id: 'a',
        title: 'Room A',
        children: [{
            id: 'a1',
            title: 'Room A1'
          },
          {
            id: 'a2',
            title: 'Room A2'
          }
        ]
      },
      {
        id: 'b',
        title: 'Room B'
      },
      {
        id: 'c',
        title: 'Room C'
      },
      {
        id: 'd',
        title: 'Room D'
      }
    ],
    $scope.uiConfig = {
      calendar: {
        height: $(window).height() - 280,
        editable: true,
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        selectable: true,
        header: {
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        resources: $scope.m.resources,
        // dayClick: function(event) {
        //   // //console.log('Day clicking');
        //   // //console.log(event);
        //   $scope.m.addEventModal(event);
        // },
        select: function(start, end, allday) {
          // alert(start)
          //   alert(end)
          //     alert(allday)

          $scope.m.addEventModal();
        },
        eventMouseover: function(event) {
          // alert(start)
          //   alert(end)
          //     alert(allday)

          //console.log(event);
          $scope.m.currentEvent = event;
          console.log($scope.m.currentEvent);
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };


  /* event sources array*/
  $scope.eventSources = [$scope.events];
  //  $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

  $scope.m.cancel = function() {
    modalInstance.dismiss('cancel');
    $scope.m.type = '';
    $scope.m.index = null;
  };

  $scope.saveEvent = function(type) {
    //console.log($scope.start);
    //console.log($scope.end);
    //console.log($scope.jobTitle);
    $scope.events.push({
      title: $scope.m.selectedEvent.jobTitle,
      start: $scope.m.selectedEvent.startDate,
      end: $scope.m.selectedEvent.endDate,
      className: [type]
    });
  };
  $scope.addResourceItem = function(item, type) {
    item.type = type;
    var found = false;
    $scope.assignedResource.forEach(function(value, key) {
      if (value.title == item.title) {
        $scope.assignedResource.splice(key, 1);
        found = true;
      }
    })
    if (!found)
      $scope.assignedResource.push(item)

    //console.log($scope.assignedResource)
  }

  $scope.m.WynEvents = [{
      userid: 3,
      resourceId: 'a',
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      end: new Date(y, m, 1),
      allDay: true,

      className: "job-event",
      stick: true,
    },
    {
      userid: 3,
      title: 'WTR-23211',
      resourceId: 'a',
      type: 'job-event',
      start: new Date(y, m, 3),
      end: new Date(y, m, 3),

      className: "job-event",
      stick: true,
    },
    {
      userid: 3,
      title: 'WTR-23132',
      resourceId: 'a',
      type: 'job-event',
      start: new Date(y, m, 5),
      end: new Date(y, m, 5),
      allDay: false,

      className: "job-event",
      stick: true,
    },
    {
      userid: 3,
      title: 'WTR-233',
      resourceId: 'a',
      type: 'job-event',
      start: new Date(y, m, 8),
      end: new Date(y, m, 8),
      allDay: false,

      className: "job-event",
      stick: true,

    },

  ]



  $scope.m.DionEvents = [{
      userid: 1,
      title: 'WTR-231',
      resourceId: 'b',
      type: 'job-event',
      start: new Date(y, m, 1),
      end: new Date(y, m, 1),
      className: "job-event",
      stick: true,
    },
    {
      userid: 1,
      title: 'Scrum Meeting',
      resourceId: 'b',
      type: 'calendar-event',
      start: new Date(y, m, 10, 10, 0),
      end: new Date(y, m, 10, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,
    },
    {
      userid: 1,
      title: 'Repeating Event',
      type: 'calendar-event',
      resourceId: 'b',
      start: new Date(y, m, d + 8, 10, 0),
      end: new Date(y, m, d + 8, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,

    },

  ]


  $scope.m.AdamEvents = [{
      userid: 7,
      title: 'Product Meeting',
      resourceId: 'c',
      type: 'job-event',
      start: new Date(y, m, 10),
      end: new Date(y, m, 10),
      className: "marketing-event",
      stick: true,
    },
    {
      userid: 7,
      title: 'Product Meeting pt2',
      type: 'calendar-event',
      resourceId: 'c',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 5),
      allDay: false,
      className: "marketing-event",
      stick: true,
    },

  ];
  $scope.m.AlexEvents = [{
      userid: 4,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 17),
      resourceId: 'd',
      end: new Date(y, m, 17),
      allDay: true,

      className: "job-event",
      stick: true,
    },
    {
      userid: 4,
      title: 'WTR-23211',
      type: 'job-event',
      start: new Date(y, m, 21),
      end: new Date(y, m, 21),

      className: "job-event",
      stick: true,
    },
    {
      userid: 4,
      title: 'WTR-23132',
      type: 'job-event',
      start: new Date(y, m, 22),
      end: new Date(y, m, 22),
      allDay: false,

      className: "job-event",
      stick: true,
    },

  ]

  $scope.m.BlairEvents = [{
      userid: 2,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      end: new Date(y, m, 1),
      className: "job-event",
      stick: true,
    },
    {
      userid: 2,
      title: 'Scrum Meeting',
      type: 'calendar-event',
      start: new Date(y, m, 3, 10, 0),
      end: new Date(y, m, 3, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,
    },
    {
      userid: 2,
      title: 'Repeating Event',
      type: 'calendar-event',
      start: new Date(y, m, d + 8, 10, 0),
      end: new Date(y, m, d + 8, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,

    },

  ];
  $scope.m.MattEvents = [{
      userid: 5,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      end: new Date(y, m, 1),
      className: "job-event",
      stick: true
    },
    {
      userid: 5,
      title: 'Marketing Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 5),
      className: "marketing-event",
      stick: true
    },
    {
      userid: 5,
      title: 'Scrum Meeting',
      type: 'calendar-event',
      start: new Date(y, m, 3, 10, 0),
      end: new Date(y, m, 3, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,
    },
    {
      userid: 5,
      title: 'Repeating Event',
      type: 'calendar-event',
      start: new Date(y, m, d + 4, 10, 0),
      end: new Date(y, m, d + 4, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,

    },

  ];
  $scope.m.JosephEvents = [{
      userid: 6,
      title: 'Product Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d + 32),
      end: new Date(y, m, d + 32),
      className: "marketing-event",
      stick: true,
    },
    {
      userid: 6,
      title: 'Management Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d + 1),
      end: new Date(y, m, d + 1),
      className: "marketing-event",
      stick: true,
    },
    {
      userid: 6,
      title: 'Management Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d + 4),
      end: new Date(y, m, d + 4),
      className: "marketing-event",
      stick: true,
    },


  ]

  $scope.m.teamCanadaEvents = [{
      userid: 3,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      color: '#4AA2FF',
      end: new Date(y, m, 1),
      allDay: true,

      className: "job-event",
      stick: true,
    },
    {
      userid: 3,
      title: 'WTR-23211',
      type: 'job-event',
      start: new Date(y, m, 3),
      color: '#4AA2FF',
      end: new Date(y, m, 3),

      className: "job-event",
      stick: true,
    },
    {
      userid: 3,
      title: 'WTR-23132',
      type: 'job-event',
      start: new Date(y, m, 5),
      color: '#4AA2FF',
      end: new Date(y, m, 5),
      allDay: false,

      className: "job-event",
      stick: true,
    },
    {
      userid: 3,
      title: 'WTR-233',
      type: 'job-event',
      start: new Date(y, m, 8),
      color: '#4AA2FF',
      end: new Date(y, m, 8),
      allDay: false,

      className: "job-event",
      stick: true,

    }, {
      userid: 1,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      color: '#4AA2FF',
      end: new Date(y, m, 1),
      className: "job-event",
      stick: true,
    },
    {
      userid: 1,
      title: 'Scrum Meeting',
      type: 'calendar-event',
      start: new Date(y, m, 10, 10, 0),
      color: '#4AA2FF',
      end: new Date(y, m, 10, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,
    },
    {
      userid: 1,
      title: 'Repeating Event',
      type: 'calendar-event',
      start: new Date(y, m, d + 8, 10, 0),
      color: '#4AA2FF',
      end: new Date(y, m, d + 8, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,

    }, {
      userid: 4,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 17),
      color: '#4AA2FF',
      end: new Date(y, m, 17),
      allDay: true,

      className: "job-event",
      stick: true,
    },
    {
      userid: 4,
      title: 'WTR-23211',
      type: 'job-event',
      start: new Date(y, m, 21),
      color: '#4AA2FF',
      end: new Date(y, m, 21),

      className: "job-event",
      stick: true,
    },
    {
      userid: 4,
      title: 'WTR-23132',
      type: 'job-event',
      start: new Date(y, m, 22),
      color: '#4AA2FF',
      end: new Date(y, m, 22),
      allDay: false,

      className: "job-event",
      stick: true,
    }, {
      userid: 2,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      color: '#4AA2FF',
      end: new Date(y, m, 1),
      className: "job-event",
      stick: true,
    },
    {
      userid: 2,
      title: 'Scrum Meeting',
      type: 'calendar-event',
      start: new Date(y, m, 3, 10, 0),
      color: '#4AA2FF',
      end: new Date(y, m, 3, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,
    },
    {
      userid: 2,
      title: 'Repeating Event',
      type: 'calendar-event',
      start: new Date(y, m, d + 8, 10, 0),
      color: '#4AA2FF',
      end: new Date(y, m, d + 8, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,

    },
  ]





  $scope.m.teamBlueEvents = [{
      userid: 7,
      title: 'Product Meeting',
      type: 'job-event',
      start: new Date(y, m, 10),
      end: new Date(y, m, 10),
      color: '#4AA2FF',
      className: "marketing-event",
      stick: true,
    },
    {
      userid: 7,
      title: 'Product Meeting pt2',
      type: 'calendar-event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 5),
      allDay: false,
      color: '#4AA2FF',
      className: "marketing-event",
      stick: true,
    }, {
      userid: 6,
      title: 'Product Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d + 31),
      end: new Date(y, m, d + 32),
      className: "marketing-event",
      color: '#4AA2FF',
      stick: true,
    },
    {
      userid: 6,
      title: 'Management Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d + 1),
      end: new Date(y, m, d + 1),
      className: "marketing-event",
      color: '#4AA2FF',
      stick: true,
    },
    {
      userid: 6,
      title: 'Management Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d + 4),
      end: new Date(y, m, d + 4),
      color: '#4AA2FF',
      className: "marketing-event",
      stick: true,
    }, {
      userid: 5,
      title: 'WTR-231',
      type: 'job-event',
      start: new Date(y, m, 1),
      end: new Date(y, m, 1),
      color: '#4AA2FF',
      className: "job-event",
      stick: true
    },
    {
      userid: 5,
      title: 'Marketing Meeting',
      type: 'marketing-event',
      start: new Date(y, m, d - 2),
      color: '#4AA2FF',
      end: new Date(y, m, d - 2),
      className: "marketing-event",
      stick: true
    },
    {
      userid: 5,
      title: 'Scrum Meeting',
      type: 'calendar-event',
      start: new Date(y, m, 3, 10, 0),
      color: '#4AA2FF',
      end: new Date(y, m, 3, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,
    },
    {
      userid: 5,
      title: 'Repeating Event',
      color: '#4AA2FF',
      type: 'calendar-event',
      start: new Date(y, m, d + 4, 10, 0),
      end: new Date(y, m, 3, 10, 0),
      allDay: false,
      className: "calendar-event",
      stick: true,

    },


  ]




  $scope.init = function() {
    $scope.m.MattEvents.forEach(function(value, key) {
      $scope.events.push(value);
    });
  }
  $scope.init();


  $scope.taskCompleted = function() {
    if ($scope.m.selectedEvent.taskCompleted) {
console.log($scope.m.selectedEvent.completedDate );
      if (!$scope.m.selectedEvent.completedDate) {
        $scope.m.selectedEvent.completedDate = new Date();
      }
    }
  }



});
