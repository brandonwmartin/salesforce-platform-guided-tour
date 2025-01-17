'use strict';

export default function ChapterCustomerAppDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
  TopNavbar.InfoActive = true;
  Drawer.openToIntro();

  $scope.gtmTrack = (cat, label, act = "") => {
    window.dataLayer.push({
      event: 'eventTracker',
      eventCat: cat,
      eventAct: act === "" ? window.location.href : act,
      eventLbl: label,
      nonInteraction: false
    });
  };

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.HotspotsEnabled = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Click &quot;Save&quot; to deploy.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &quot;Customize&quot; to get started.'
    });

    Steps.pop({
      number: 'three',
      title: 'If Mike adds customizations, such as &quot;Self Driving Capability&quot;, he can see the price quote change automatically.'
    });

    Steps.pop({
      number: 'four',
      title: 'Click  &quot;Purchase.&quot;'
    });

    Steps.pop({
      number: 'five',
      title: 'Click the button to open Agentforce.'
    });

    Steps.pop({
      number: 'six',
      title: 'Press &quot;send&quot; to check on the status of your order.'
    });

    Hotspots.clear();
    TopNavbar.DidYouKnowCount = 0;
    TopNavbar.HotSpotCount = 1;
  };

  $scope.beginForBuilderStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.InfoActive = false;
    TopNavbar.DidYouKnowCount = 6;

    $timeout(() => {
      Steps.activate('two');
    }, 1000);
  };
}
