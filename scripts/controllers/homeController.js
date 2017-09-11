CalendarApp.controller('homeController', function homeController($scope, $http, $rootScope, $location, $uibModal, localStorageService, $timeout, uiCalendarConfig, $compile, $log) {
  $scope.m = {};

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
  $scope.m.resources =[];
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

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  $('.sidebar').height(($(window).height() - 200));
  var y = date.getFullYear();
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
    resourceid: 'dion',
    selected: false
  }, {
    title: 'Blair Hacche',
    userid: 2,
    color: "#28508d",
    resourceid: 'blair',
    selected: false
  }, {
    title: 'Wyn Hou',
    userid: 3,
    color: "#41b778",
    resourceid: 'wyn',
    selected: false
  }, {
    title: 'Alex Godlewski',
    userid: 4,
    color: "#b7a241",
    resourceid: 'alex',
    selected: false
  }, {
    title: 'Matt Bell',
    userid: 5,
    color: "#7341b7",
    resourceid: 'matt',
    selected: false
  }, {
    title: 'Joseph Nieh',
    userid: 6,
    color: "#41b781",
    resourceid: 'joseph',
    selected: false
  }, {
    title: 'Adam Grace',
    userid: 7,
    color: "#62b741",
    resourceid: 'adam',
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
  $scope.offices = [{
    title: 'Atlanta',
    divid: 1,
    selected: false
  }, {
    title: 'Utah',
    divid: 1,
    selected: false
  }, {
    title: 'Oxford',
    divid: 1,
    selected: false
  }, {
    title: 'Toronto',
    divid: 1,
    selected: false
  }]
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
  $scope.m.events = [];
  $scope.m.events.events = [];
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
$scope.m.resources = [{
  id: 'teamcanada',
  title: 'Team Canada',
  children: [{
      id: 'dion',
      title: 'Dion'
    },
    {
      id: 'alex',
      title: 'Alex'
    },
    {
      id: 'wyn',
      title: 'Wyn'
    },
    {
      id: 'blair',
      title: 'Blair'
    }

  ]
},{
  id: 'teamblue',
  title: 'Team Blue',
  children: [{
      id: 'matt',
      title: 'Matt'
    },
    {
      id: 'adam',
      title: 'Adam'
    },
    {
      id: 'joseph',
      title: 'Joseph'
    }

  ]
}]
  /* event source that calls a function on every view switch */
  $scope.m.eventsF = function(start, end, timezone, callback) {
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
    console.log($scope.m.events);
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
    // $scope.m.eventSources = [$scope.events];
    // $('#my-calendar').fullCalendar('removeEvents')
    // $('#my-calendar').fullCalendar('addEventSource', $scope.m.eventSources)

    //alert('Feature Currently Unavailable');
    // console.log('finished');
    // console.log($scope.events);


  }


  $scope.removeEmployeeItems = function(userid) {

    $scope.m.events = [];
    $scope.m.eventSources = [$scope.m.events];
    // uiCalendarConfig.calendars['myCalendar'].fullCalendar('removeEventSource', $scope.m.eventSources);
    // uiCalendarConfig.calendars['myCalendar'].fullCalendar('addEventSource', $scope.m.eventSources);

    $('#my-calendar').fullCalendar('removeEvents')
    $('#my-calendar').fullCalendar('addEventSource', $scope.m.eventSources)


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

              $scope.m.events.push(value);

            });
            // $scope.m.resources.push([{
            //   id: 'teamcanada',
            //   title: 'Team Canada',
            //   children: [{
            //       id: 'dion',
            //       title: 'Dion'
            //     },
            //     {
            //       id: 'alex',
            //       title: 'Alex'
            //     },
            //     {
            //       id: 'wyn',
            //       title: 'Wyn'
            //     },
            //     {
            //       id: 'blair',
            //       title: 'Blair'
            //     }
            //
            //   ]
            // }])
            // $scope.m.refetchResources();


          }
          if (value.groupid == 2) {
            $scope.m.teamBlueEvents.forEach(function(value, key) {

              $scope.m.events.push(value);
            });


            // $scope.m.resources.push([{
            //   id: 'teamblue',
            //   title: 'Team Blue',
            //   children: [{
            //       id: 'matt',
            //       title: 'Matt'
            //     },
            //     {
            //       id: 'adam',
            //       title: 'Adam'
            //     },
            //     {
            //       id: 'joseph',
            //       title: 'Joseph'
            //     }
            //
            //   ]
            // }]);
            // $scope.m.refetchResources();
          }
          $scope.hasResource = true;
          found = true;
        }

        //  console.log($scope.events);
      })

      $scope.m.eventSources = [$scope.m.eventSources];
      $scope.m.eventSources = [];
      //$('#my-calendar').fullCalendar('removeEvents')
      //  $('#my-calendar').fullCalendar('addEventSource', $scope.m.eventsources)



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
                $scope.m.events.push(value);
              });
              break;
            case 2:
              $scope.m.BlairEvents.forEach(function(value, key) {
                $scope.m.events.push(value);
              });
              break;
            case 3:
              $scope.m.WynEvents.forEach(function(value, key) {
                $scope.m.events.push(value);
              });
              break;
            case 4:
              $scope.m.AlexEvents.forEach(function(value, key) {
                $scope.m.events.push(value);
              });
              break;
            case 5:
              $scope.m.MattEvents.forEach(function(value, key) {
                $scope.m.events.push(value);
              });
              break;
            case 6:
              $scope.m.JosephEvents.forEach(function(value, key) {
                $scope.m.events.push(value);
              });
              break;
            case 7:
              $scope.m.AdamEvents.forEach(function(value, key) {
                $scope.m.events.push(value);
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
  $scope.alertOnEventClick = function(event) {
    console.log('CLICKED was clicked ');
    console.log(event);
    $scope.m.selectedEvent = {};
    if (event.className == "calendar-event")
      $scope.m.selectedEvent.taskType = 'calendarEvent';
    if (event.className == "job-event")
      $scope.m.selectedEvent.taskType = 'jobTask';
    if (event.className == "marketing-event")
      $scope.m.selectedEvent.taskType = 'marketingTask';
    //console.log(view);
    //console.log(jsEvent);

    $scope.m.selectedEvent.startDate = event.start;
    $scope.m.selectedEvent.endDate = event.end;
    $scope.m.openEventModal(event);
    //console.log(jsEvent);
    //console.log(view);
    //console.log(date);

  };
  $scope.dayClick = function(event) {
    $scope.alertMessage = (date.type + ' was clicked ');

    $scope.m.openEventModal(event);
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
  // $scope.addEvent = function() {
  //   $scope.events.push({
  //     title: 'Open Sesame',
  //     start: new Date(y, m, 28),
  //     end: new Date(y, m, 29),
  //     stick: true,
  //     className: ['openSesame']
  //   });
  // };
  /* remove event */
  $scope.remove = function(index) {
    $scope.m.events.splice(index, 1);
  };
  /* Change View */
  $scope.changeView = function(view) {
    $timeout(function() {
      uiCalendarConfig.calendars['myCalendar'].fullCalendar('changeView', view);
    }, 0)
  };

  $scope.m.calendarAddResource = function(item) {
    //  alert('added!')
    $timeout(function() {
      uiCalendarConfig.calendars['myCalendar'].fullCalendar('addResource', item);
    }, 0)
  };
  $scope.m.refetchResources = function() {

    $timeout(function() {
      uiCalendarConfig.calendars['myCalendar'].fullCalendar('refetchResources');
    }, 0)
  };
  $scope.m.calendarRemoveResource = function(id) {
    $timeout(function() {
      uiCalendarConfig.calendars['myCalendar'].fullCalendar('removeResource', id);
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
      'popover-popup-close-delay': 1500,
      'popover-popup-delay': 1500,
      'popover-placement': 'top',
      'popover-animation': 'true',
      'uib-popover-template': "'eventPopover.html'",
    });
    // console.log(element);
    // console.log(element.parentNode.nodeName)

    console.log(event)

    console.log('I"M RENDERING')
    if (!$scope.m.toggleList) {
      if (event.color) {
        element.prepend("<b class='color-block' style='background:" + event.color + "'></b>");
      }
      if (event.className == "job-event" || event.className == "job-event completed-event")
        element.prepend("<b class='fa fa-gavel fa-icon'></b>");
      if (event.className == "marketing-event" || event.className == "marketing-event completed-event") {
        //element.prepend("<div class='color-block'></span>");
        element.prepend("<b class='fa fa-bar-chart fa-icon'></b>");
      }
      if (event.className == "calendar-event" || event.className == "calendar-event completed-event")
        element.prepend("<b class='fa fa-calendar fa-icon'></b>");
      try {
        if (event.eventInfo.completedDate || event.eventInfo.taskCompleted)
          element.prepend("<b class='fa fa-check-circle fa-icon complete-icon'></b>");
      } catch (e) {}
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
  $scope.m.saveCalendar = function(item) {
    if (!$scope.m.calendarNew) {
      $scope.m.calendars.push(item);
    } else
      $scope.m.calendars.forEach(function(value, key) {
        if (value.id == item.id) {
          $scope.m.calendars[key] = item;
        }
      })

    $scope.m.cancel();

  }

  $scope.m.deleteCalendar = function(item) {
    if (window.confirm("Are you sure you want to delete this calendar?")) {
      $scope.m.calendars.forEach(function(value, key) {
        if (value.title == item.title) {
          $scope.m.calendars.splice(key, 1);
        }
      })
    }

    //$scope.m.cancel();

  }
  $scope.m.calendarModal = function(item, edit) {
    $scope.m.calendarNew = edit;
    if (item)
      $scope.m.selectedCalendar = angular.copy(item);
    else

      $scope.m.selectedCalendar = {};
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'calendarModal.html',

      size: 'md',
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.values;
        }
      }
    });
  }
  $scope.m.addEventModal = function(start, end, allday) {
    $scope.step = null;
    $scope.m.selectedEvent = {};
    $scope.m.selectedEvent.taskType = 'jobTask';
    console.log('startdate');
    console.log(start);
    console.log(end);
    console.log(allday);
    if (start) {
      $scope.m.selectedEvent.startDate = start;
      if (!start.hasTime())
        $scope.m.selectedEvent.allDay = true;
    }
    if (end)
      $scope.m.selectedEvent.endDate = end;
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'eventModal.html',
      keyboard: false,

      size: 'md',
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.values;
        }
      }
    });
  }
  $scope.m.openEventModal = function(event) {
    console.log('wtf')
    console.log(event);
    $scope.m.selectedEvent = event.eventInfo;

    if (event.start) {
      $scope.m.selectedEvent.startDate = event.start;
      if (!event.start.hasTime())
        $scope.m.selectedEvent.allDay = true;
    }
    if (event.end)
      $scope.m.selectedEvent.endDate = event.end;
    modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'eventModal.html',
      keyboard: false,

      size: 'md',
      scope: $scope,
      resolve: {
        items: function() {
          return $scope.values;
        }
      }
    });
  }
  /* config object */

  $scope.uiConfig = {
    calendar: {
      height: $(window).height() - 180,
      editable: true,
      nowIndicator: true,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      selectable: true,
      businessHours: {
        start: '08:00',
        end: '17:00',
        dow: [1, 2, 3, 4, 5] // Monday is not a working day
      },
      header: {
        left: 'today prev,next',
        center: 'title',
        right: ''
      },
      resources: $scope.m.resources,
      select: function(start, end, allday) {
        // alert(start)
        //   alert(end)
        //     alert(allday)

        $scope.m.addEventModal(start, end, allday);
      },
      eventMouseover: function(event) {
        // alert(start)
        //   alert(end)
        //     alert(allday)

        //console.log(event);
        $timeout(function() {
          $scope.m.currentEvent = event;
        }, 1500)
        console.log('currentevent');
        console.log($scope.m.currentEvent);
      },
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
    }
  };

  $scope.m.loadCalendar = function(item) {
    $scope.m.calendars.forEach(function(value, key) {
      if (value.title == item.title) {
        value.selected = true;
      } else value.selected = false;
    })


  }
  $scope.m.deletedCalendar = function(item) {

    $scope.m.calendars.forEach(function(value, key) {
      if (value.title == item.title) {
        value.selected = true;
      } else value.selected = false;
    })


  }
  /* event sources array*/
  $scope.m.eventSources = [$scope.m.events];
  //  $scope.m.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

  $scope.m.cancel = function() {
    modalInstance.dismiss('cancel');
    $scope.m.type = '';
    $scope.m.index = null;
  };

  $scope.saveEvent = function() {
    //console.log($scope.start);
    //console.log($scope.end);
    //console.log($scope.jobTitle);
    if ($scope.m.selectedEvent.taskType == "jobTask")
      $scope.m.selectedEvent.className = "job-event";
    if ($scope.m.selectedEvent.taskType == "marketingTask")
      $scope.m.selectedEvent.className = "marketing-event";
    if ($scope.m.selectedEvent.taskType == "calendarEvent")
      $scope.m.selectedEvent.className = "calendar-event";

    try {
      if ($scope.m.selectedEvent.completedDate || $scope.m.selectedEvent.taskCompleted)
        $scope.m.selectedEvent.className += " completed-event";
    } catch (e) {}
    $scope.m.events.push({
      title: $scope.m.selectedEvent.taskDescription,
      start: $scope.m.selectedEvent.startDate,
      end: $scope.m.selectedEvent.endDate,
      eventInfo: $scope.m.selectedEvent,
      className: $scope.m.selectedEvent.className,
      allDay: $scope.m.selectedEvent.allDay

    });
    console.log('events')
    console.log($scope.m.events);
    console.log($scope.m.eventSources);

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
  $scope.removeResource = function(item) {

    $scope.assignedResource.forEach(function(value, key) {
      if (value.title == item.title) {
        console.log('found')
        $scope.assignedResource.splice(key, 1);
      }
    })

    $scope.resources.employees.forEach(function(value, key) {

      if (value.title == item.title) {
        value.selected = false;
      }
    })




  }
  $scope.m.calendars = [{
    title: 'My Calendar',
    selected: true,
    default:true,
    id: 1
  }, {
    title: 'Team Calendar',
    selected: false,
    default:false,
    id: 2
  }, {
    title: 'Job Task',
    selected: false,
    default:false,
    id: 3
  }]
  $scope.m.WynEvents = [{
    "userid": 3,
    "resourceId": "wyn",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 1
  }, {
    "userid": 3,
    "resourceId": "wyn",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 2
  }, {
    "userid": 3,
    "resourceId": "wyn",
    "title": "Work Order",
    "start": "2017-08-29T12:30:00",
    "end": "2017-08-29T15:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-29T12:30:00",
      "endDate": "2017-08-29T15:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Order",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 3
  }, {
    "userid": 3,
    "resourceId": "wyn",
    "title": "Work Cleanup",
    "start": "2017-08-28T08:30:00",
    "end": "2017-08-28T11:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28T08:30:00",
      "endDate": "2017-08-28T11:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Cleanup",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 5
  }]

  $scope.m.DionEvents = [{
    "userid": 1,
    "resourceId": "dion",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 1
  }, {
    "userid": 1,
    "resourceId": "dion",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 2
  }, {
    "userid": 1,
    "resourceId": "dion",
    "title": "Work Order",
    "start": "2017-08-29T12:30:00",
    "end": "2017-08-29T15:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-29T12:30:00",
      "endDate": "2017-08-29T15:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Order",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 3
  }]

  $scope.m.AlexEvents = [{

    "userid": 4,
    "resourceId": "alex",
    "title": "Cleanup",
    "start": "2017-08-28T08:30:00",
    "end": "2017-08-28T15:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28T08:30:00",
      "endDate": "2017-08-28T15:00:00",
      "jobTitle": "wtr-333",
      "taskDescription": "Cleanup",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 1
  }, {
    "userid": 4,
    "resourceId": "alex",
    "title": "Renovation Work",
    "start": "2017-08-30T11:00:00",
    "end": "2017-08-30T14:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-30T11:00:00",
      "endDate": "2017-08-30T14:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Renovation Work",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 2
  }, {
    "userid": 4,
    "resourceId": "alex",
    "title": "Meeting with manager",
    "start": "2017-08-31T08:30:00",
    "end": "2017-08-31T10:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-31T08:30:00",
      "endDate": "2017-08-31T10:00:00",
      "taskDescription": "Meeting with manager",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 3
  }]

  $scope.m.BlairEvents = [{
    "userid": 2,
    "resourceId": "blair",
    "title": "Fire Damage",
    "start": "2017-08-28",
    "end": "2017-08-29",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28",
      "allDay": true,
      "endDate": "2017-08-29",
      "jobTitle": "wtr-333",
      "taskDescription": "Fire Damage",
      "className": "job-event"
    },
    "className": "job-event",
    "allDay": true,
    "_id": 1
  }, {
    "userid": 2,
    "resourceId": "blair",
    "title": "Meeting with the boss",
    "start": "2017-08-31T11:00:00",
    "end": "2017-08-31T17:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-31T11:00:00",
      "endDate": "2017-08-31T17:00:00",
      "taskDescription": "Meeting with the boss",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 2
  }]
  $scope.m.MattEvents = [{
    "userid": 5,
    "resourceId": "matt",
    "title": "Water Damage Job",
    "start": "2017-08-28T08:00:00",
    "end": "2017-08-28T13:30:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28T08:00:00",
      "endDate": "2017-08-28T13:30:00",
      "jobTitle": "wtr-123",
      "taskDescription": "Water Damage Job",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 1
  }, {
    "userid": 5,
    "resourceId": "matt",
    "title": "Marketing Meeting",
    "start": "2017-08-29T09:30:00",
    "end": "2017-08-29T12:00:00",
    "eventInfo": {
      "taskType": "marketingTask",
      "startDate": "2017-08-29T09:30:00",
      "endDate": "2017-08-29T12:00:00",
      "Company": "ServiceMaster",
      "companyContact": "DeMar Derozan",
      "amount": 342.34,
      "taskDescription": "Marketing Meeting",
      "className": "marketing-event"
    },
    "className": "marketing-event",
    "_id": 2
  }, {
    "userid": 5,
    "resourceId": "matt",
    "title": "PTO",
    "start": "2017-08-30T08:30:00",
    "end": "2017-08-30T10:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-30T08:30:00",
      "endDate": "2017-08-30T10:00:00",
      "taskDescription": "PTO",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 3
  }]
  $scope.m.JosephEvents = [{
    "userid": 3,
    "resourceId": "joseph",
    "title": "Working with Steve",
    "start": "2017-08-28T10:30:00",
    "end": "2017-08-28T15:30:00",
    "eventInfo": {
      "taskType": "marketingTask",
      "startDate": "2017-08-28T10:30:00",
      "endDate": "2017-08-28T15:30:00",
      "Company": "Apple",
      "companyContact": "Kyle Lowry",
      "Activity": "Phone Call",
      "amount": 400,
      "taskDescription": "Working with Steve",
      "className": "marketing-event"
    },
    "className": "marketing-event",
    "_id": 1
  }, {
    "userid": 3,
    "resourceId": "joseph",
    "title": "Hurricane Improvement",
    "start": "2017-08-29T09:00:00",
    "end": "2017-08-29T12:30:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-29T09:00:00",
      "endDate": "2017-08-29T12:30:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Hurricane Improvement",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 2
  }, {
    "userid": 3,
    "resourceId": "joseph",
    "title": "Flood Damage",
    "start": "2017-08-31T11:00:00",
    "end": "2017-08-31T14:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-31T11:00:00",
      "endDate": "2017-08-31T14:00:00",
      "jobTitle": "wtr-333",
      "taskDescription": "Flood Damage",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 3
  }]
  $scope.m.AdamEvents = [{
    "userid": 7,
    "resourceId": "adam",
    "title": "Morning Breakfast",
    "start": "2017-08-28T06:30:00",
    "end": "2017-08-28T11:30:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-28T06:30:00",
      "endDate": "2017-08-28T11:30:00",
      "taskDescription": "Morning Breakfast",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 1
  }, {
    "userid": 7,
    "resourceId": "adam",
    "title": "Work Order 3",
    "start": "2017-08-30T09:30:00",
    "end": "2017-08-30T14:30:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-30T09:30:00",
      "endDate": "2017-08-30T14:30:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Order 3",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 2
  }]

  $scope.m.teamCanadaEvents = [{
    "userid": 3,
    "resourceId": "wyn",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 1
  }, {
    "userid": 3,
    "resourceId": "wyn",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 2
  }, {
    "userid": 3,
    "resourceId": "wyn",
    "title": "Work Order",
    "start": "2017-08-29T12:30:00",
    "end": "2017-08-29T15:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-29T12:30:00",
      "endDate": "2017-08-29T15:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Order",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 3
  }, {
    "userid": 3,
    "resourceId": "wyn",
    "title": "Work Cleanup",
    "start": "2017-08-28T08:30:00",
    "end": "2017-08-28T11:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28T08:30:00",
      "endDate": "2017-08-28T11:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Cleanup",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 5
  }, {
    "userid": 1,
    "resourceId": "dion",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 1
  }, {
    "userid": 1,
    "resourceId": "dion",
    "title": "Scrum Repeating Event",
    "start": "2017-08-29T07:30:00",
    "end": "2017-08-29T09:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-29T07:30:00",
      "endDate": "2017-08-29T09:00:00",
      "taskDescription": "Scrum Repeating Event",
      "className": "calendar-event",
      "repeat": "Every day",
      "repeatEnd": "After 1 time"
    },
    "className": "calendar-event",
    "_id": 2
  }, {
    "userid": 1,
    "resourceId": "dion",
    "title": "Work Order",
    "start": "2017-08-29T12:30:00",
    "end": "2017-08-29T15:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-29T12:30:00",
      "endDate": "2017-08-29T15:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Order",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 3
  }, {

    "userid": 4,
    "resourceId": "alex",
    "title": "Cleanup",
    "start": "2017-08-28T08:30:00",
    "end": "2017-08-28T15:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28T08:30:00",
      "endDate": "2017-08-28T15:00:00",
      "jobTitle": "wtr-333",
      "taskDescription": "Cleanup",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 1
  }, {
    "userid": 4,
    "resourceId": "alex",
    "title": "Renovation Work",
    "start": "2017-08-30T11:00:00",
    "end": "2017-08-30T14:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-30T11:00:00",
      "endDate": "2017-08-30T14:00:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Renovation Work",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 2
  }, {
    "userid": 4,
    "resourceId": "alex",
    "title": "Meeting with manager",
    "start": "2017-08-31T08:30:00",
    "end": "2017-08-31T10:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-31T08:30:00",
      "endDate": "2017-08-31T10:00:00",
      "taskDescription": "Meeting with manager",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 3
  }, {
    "userid": 2,
    "resourceId": "blair",
    "title": "Fire Damage",
    "start": "2017-08-28",
    "end": "2017-08-29",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28",
      "allDay": true,
      "endDate": "2017-08-29",
      "jobTitle": "wtr-333",
      "taskDescription": "Fire Damage",
      "className": "job-event"
    },
    "className": "job-event",
    "allDay": true,
    "_id": 1
  }, {
    "userid": 2,
    "resourceId": "blair",
    "title": "Meeting with the boss",
    "start": "2017-08-31T11:00:00",
    "end": "2017-08-31T17:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-31T11:00:00",
      "endDate": "2017-08-31T17:00:00",
      "taskDescription": "Meeting with the boss",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 2
  }]


  $scope.m.teamBlueEvents = [{
    "userid": 5,
    "resourceId": "matt",
    "title": "Water Damage Job",
    "start": "2017-08-28T08:00:00",
    "end": "2017-08-28T13:30:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-28T08:00:00",
      "endDate": "2017-08-28T13:30:00",
      "jobTitle": "wtr-123",
      "taskDescription": "Water Damage Job",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 1
  }, {
    "userid": 5,
    "resourceId": "matt",
    "title": "Marketing Meeting",
    "start": "2017-08-29T09:30:00",
    "end": "2017-08-29T12:00:00",
    "eventInfo": {
      "taskType": "marketingTask",
      "startDate": "2017-08-29T09:30:00",
      "endDate": "2017-08-29T12:00:00",
      "Company": "ServiceMaster",
      "companyContact": "DeMar Derozan",
      "amount": 342.34,
      "taskDescription": "Marketing Meeting",
      "className": "marketing-event"
    },
    "className": "marketing-event",
    "_id": 2
  }, {
    "userid": 5,
    "resourceId": "matt",
    "title": "PTO",
    "start": "2017-08-30T08:30:00",
    "end": "2017-08-30T10:00:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-30T08:30:00",
      "endDate": "2017-08-30T10:00:00",
      "taskDescription": "PTO",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 3
  }, {
    "userid": 3,
    "resourceId": "joseph",
    "title": "Working with Steve",
    "start": "2017-08-28T10:30:00",
    "end": "2017-08-28T15:30:00",
    "eventInfo": {
      "taskType": "marketingTask",
      "startDate": "2017-08-28T10:30:00",
      "endDate": "2017-08-28T15:30:00",
      "Company": "Apple",
      "companyContact": "Kyle Lowry",
      "Activity": "Phone Call",
      "amount": 400,
      "taskDescription": "Working with Steve",
      "className": "marketing-event"
    },
    "className": "marketing-event",
    "_id": 1
  }, {
    "userid": 3,
    "resourceId": "joseph",
    "title": "Hurricane Improvement",
    "start": "2017-08-29T09:00:00",
    "end": "2017-08-29T12:30:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-29T09:00:00",
      "endDate": "2017-08-29T12:30:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Hurricane Improvement",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 2
  }, {
    "userid": 3,
    "resourceId": "joseph",
    "title": "Flood Damage",
    "start": "2017-08-31T11:00:00",
    "end": "2017-08-31T14:00:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-31T11:00:00",
      "endDate": "2017-08-31T14:00:00",
      "jobTitle": "wtr-333",
      "taskDescription": "Flood Damage",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 3
  }, {
    "userid": 7,
    "resourceId": "adam",
    "title": "Morning Breakfast",
    "start": "2017-08-28T06:30:00",
    "end": "2017-08-28T11:30:00",
    "eventInfo": {
      "taskType": "calendarEvent",
      "startDate": "2017-08-28T06:30:00",
      "endDate": "2017-08-28T11:30:00",
      "taskDescription": "Morning Breakfast",
      "className": "calendar-event"
    },
    "className": "calendar-event",
    "_id": 1
  }, {
    "userid": 7,
    "resourceId": "adam",
    "title": "Work Order 3",
    "start": "2017-08-30T09:30:00",
    "end": "2017-08-30T14:30:00",
    "eventInfo": {
      "taskType": "jobTask",
      "startDate": "2017-08-30T09:30:00",
      "endDate": "2017-08-30T14:30:00",
      "jobTitle": "wtr-111",
      "taskDescription": "Work Order 3",
      "className": "job-event"
    },
    "className": "job-event",
    "_id": 2
  }]




  $scope.init = function() {
    // $scope.m.MattEvents.forEach(function(value, key) {
    //   $scope.events.push(value);
    // });
    $timeout(function() {
       $scope.employees[4].selected = true;
    }, 0)
  }
  $scope.init();


  $scope.taskCompleted = function() {
    if ($scope.m.selectedEvent.taskCompleted) {
      console.log($scope.m.selectedEvent.completedDate);
      if (!$scope.m.selectedEvent.completedDate) {
        $scope.m.selectedEvent.completedDate = moment();
      }
    }
  }



});
