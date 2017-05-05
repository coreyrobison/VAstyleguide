angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('animation', {
            url: '/animation',
            templateUrl: 'components/animation/animationView.html'
            // controller: 'animationCtrl',
            // service: 'animationSvc'
        })

        .state('aspectRatio', {
            url: '/aspectRatio',
            templateUrl: 'components/aspectRatio/aspectRatioView.html'
            // controller: 'aspectRatioCtrl',
            // service: 'aspectRatioSvc'
        })

        .state('borderRadius', {
            url: '/borderRadius',
            templateUrl: 'components/borderRadius/borderRadiusView.html'
            // controller: 'borderRadiusCtrl',
            // service: 'borderRadiusSvc'
        })

        .state('boxShadow', {
            url: '/boxShadow',
            templateUrl: 'components/boxShadow/boxShadowView.html'
            // controller: 'boxShadowCtrl',
            // service: 'boxShadowSvc'
        })        

        .state('brandmarks', {
            url: '/brandmarks',
            templateUrl: 'components/brandmarks/brandmarksView.html'
            // controller: 'brandmarksCtrl',
            // service: 'brandmarksSvc'
        })

        .state('buttons', {
            url: '/buttons',
            templateUrl: 'components/buttons/buttonsView.html'
            // controller: 'buttonsCtrl',
            // service: 'buttonsSvc'
        })

        .state('centerElements', {
            url: '/centerElements',
            templateUrl: 'components/centerElements/centerElementsView.html'
            // controller: 'centerElementsCtrl',
            // service: 'centerElementsSvc'
        })

        .state('codeGuide', {
            url: '/codeGuide',
            templateUrl: 'components/codeGuide/codeGuideView.html'
            // controller: 'codeGuideCtrl',
            // service: 'codeGuideSvc'
        })

        .state('colorScheme', {
            url: '/colorScheme',
            templateUrl: 'components/colorScheme/colorSchemeView.html'
            // controller: 'colorSchemeCtrl',
            // service: 'colorSchemeSvc'
        })

        .state('designLayout', {
            url: '/designLayout',
            templateUrl: 'components/designLayout/designLayoutView.html'
            // controller: 'designLayoutCtrl',
            // service: 'designLayoutSvc'
        })

        .state('formElements', {
            url: '/formElements',
            templateUrl: 'components/formElements/formElementsView.html'
            // controller: 'formElementsCtrl',
            // service: 'formElementsSvc'
        })

        .state('grid', {
            url: '/grid',
            templateUrl: 'components/grid/gridView.html',
            controller: 'gridCtrl',
            service: 'gridSvc'
        })

        .state('hideElements', {
            url: '/hideElements',
            templateUrl: 'components/hideElements/hideElementsView.html',
            controller: 'hideElementsCtrl',
            service: 'hideElementsSvc'
        })

        .state('icons', {
            url: '/icons',
            templateUrl: 'components/icons/iconsView.html',
            controller: 'iconsCtrl',
            service: 'iconsSvc'
        })

        .state('imageGuide', {
            url: '/imageGuide',
            templateUrl: 'components/imageGuide/imageGuideView.html',
            controller: 'imageGuideCtrl',
            service: 'imageGuideSvc'
        })

        .state('intro', {
            url: '/intro',
            templateUrl: 'components/intro/introView.html'
            // controller: 'introCtrl',
            // service: 'introSvc'
        })

        .state('links', {
            url: '/links',
            templateUrl: 'components/links/linksView.html',
            controller: 'linksCtrl',
            service: 'linksSvc'
        })

        .state('lists', {
            url: '/lists',
            templateUrl: 'components/lists/listsView.html',
            controller: 'listsCtrl',
            service: 'listsSvc'
        })

        .state('militaryDictionary', {
            url: '/militaryDictionary',
            templateUrl: 'components/militaryDictionary/militaryDictionaryView.html',
            controller: 'militaryDictionaryCtrl',
            service: 'militaryDictionarySvc'
        })

        .state('modals', {
            url: '/modals',
            templateUrl: 'components/modals/modalsView.html',
            controller: 'modalsCtrl',
            service: 'modalsSvc'
        })

        .state('ourMission', {
            url: '/ourMission',
            templateUrl: 'components/ourMission/ourMissionView.html',
            controller: 'ourMissionCtrl',
            service: 'ourMissionSvc'
        })

        .state('partnerLanguag', {
            url: '/partnerLanguag',
            templateUrl: 'components/partnerLanguag/partnerLanguagView.html',
            controller: 'partnerLanguagCtrl',
            service: 'partnerLanguagSvc'
        })

        .state('partnerLogos', {
            url: '/partnerLogos',
            templateUrl: 'components/partnerLogos/partnerLogosView.html',
            controller: 'partnerLogosCtrl',
            service: 'partnerLogosSvc'
        })

        .state('partnerPresentationTools', {
            url: '/partnerPresentationTools',
            templateUrl: 'components/partnerPresentationTools/partnerPresentationToolsView.html',
            controller: 'partnerPresentationToolsCtrl',
            service: 'partnerPresentationToolsSvc'
        })

        .state('popovers', {
            url: '/popovers',
            templateUrl: 'components/popovers/popoversView.html',
            controller: 'popoversCtrl',
            service: 'popoversSvc'
        })

        .state('testimonials', {
            url: '/testimonials',
            templateUrl: 'components/testimonials/testimonialsView.html',
            controller: 'testimonialsCtrl',
            service: 'testimonialsSvc'
        })

        .state('textManipulation', {
            url: '/textManipulation',
            templateUrl: 'components/textManipulation/textManipulationView.html',
            controller: 'textManipulationCtrl',
            service: 'textManipulationSvc'
        })

        .state('tone', {
            url: '/tone',
            templateUrl: 'components/tone/toneView.html',
            controller: 'toneCtrl',
            service: 'toneSvc'
        })

        .state('typography', {
            url: '/typography',
            templateUrl: 'components/typography/typographyView.html',
            controller: 'typographyCtrl',
            service: 'typographySvc'
        })

        .state('utilityLayout', {
            url: '/utilityLayout',
            templateUrl: 'components/utilityLayout/utilityLayoutView.html',
            controller: 'utilityLayoutCtrl',
            service: 'utilityLayoutSvc'
        })


    $urlRouterProvider.otherwise('/intro');
});