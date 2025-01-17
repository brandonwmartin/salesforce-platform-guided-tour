"use strict";

export default function ChapterCustomerAppController($scope, $timeout, Steps, WizardHandler, successConfetti) {
  $scope.processOptions = [
    { label: "Select one", value: 1 },
    { label: "A record changes", value: 2 },
    { label: "Its invoked by another process", value: 3 }
  ];

  $scope.process = {
    name: "",
    api: "",
    starts: $scope.processOptions[0]
  };

  const delayInMs = 1500;

  let timeoutProcessName;
  $scope.$watch("process.name", (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $scope.process.api = $scope.process.name.toLowerCase().replace(/ /g, "_");
      $timeout.cancel(timeoutProcessName);
      timeoutProcessName = $timeout(() => {
        if (newValue.length > 3) {
          Steps.activate("three");
          if (WizardHandler.wizard("monitor").currentStepNumber() === 3) {
            WizardHandler.wizard("monitor").next();
          }
        }
      }, delayInMs);
    }
  });

  $scope.$watch("process.starts", (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        Steps.activate("four");
        if (WizardHandler.wizard("monitor").currentStepNumber() === 4) {
          WizardHandler.wizard("monitor").next();
        }
      }
    }
  });

  $scope.NextSlideNoTab = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToFirstStep = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("one");
  };

  $scope.GoToStep2 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("two");
  };
  $scope.GoToStep3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
  };
  $scope.GoToStep4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };
  $scope.GoToStep5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("five");
  };
  $scope.GoToStep6 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("six");
  };

  $scope.renderConfetti = function() {
    successConfetti.renderConfetti();
  };

  $scope.gtmTrack = (cat, label, act = "") => {
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: cat,
      eventAct: act === "" ? window.location.href : act,
      eventLbl: label,
      nonInteraction: false
    });
  };
}
