'use strict';

export default function ChapterBuilderDrawerController($scope, WizardHandler, TopNavbar, Steps, Hotspots, Drawer, $timeout) {
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

  TopNavbar.DidYouKnowEnabled = false;

  $scope.beginStory = function () {
    Drawer.close();
    WizardHandler.wizard('monitor').next();
    TopNavbar.DidYouKnowEnabled = false;
    TopNavbar.MobileEnabled = false;

    Steps.clear();
    Steps.pop({
      number: 'one',
      title: 'Give Agentforce instructions to generate Apex code.'
    });

    Steps.pop({
      number: 'two',
      title: 'Click &ldquo;Copy code&rdquo;'
    });
    Steps.pop({
      number: 'three',
      title: 'We can deploy the source code to the org.'
    });
    Steps.pop({
      number: 'four',
      title: 'Drag and drop &ldquo;Flow - Price Quote&rdquo; right below the &ldquo;Car Configurator&rdquo; component.'
    });
    Steps.pop({
      number: 'five',
      title: 'Let\'s also add the price comparator component we just created.'
    });
    Steps.pop({
      number: 'six',
      title: 'Click &ldquo;Activation&rdquo; to see your app live.'
    });

    Hotspots.clear();
    $timeout(() => {
      Steps.activate('one');
    }, 250);
  };
}
