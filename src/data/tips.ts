export const TIPS = [
  {
    id: 'event_droids',
    category: 'EVENT',
    priority: 5,

    title: {
      de: 'Event Droids',
      en: 'Event Droids',
      fi: 'Tapahtuma-Droidit',
    },

    text: {
      de: 'Einige Droids sind Event-gebunden. Prüfe aktive Wochenend-Events und Spezialaufgaben.',
      en: 'Some droids are event-based. Check active weekend events and special missions.',
      fi: 'Jotkin droidit ovat sidottuja tapahtumiin. Tarkista aktiiviset viikonlopputapahtumat ja erikoistehtävät.',
    },
    verified: true,
  },

  {
    id: 'rebirth_early',
    category: 'PROGRESSION',
    priority: 5,

    title: {
      de: 'Nicht zu früh rebirthen',
      en: "Don't Rebirth Too Early",
      fi: 'Älä tee Rebirthia liian aikaisin',
    },

    text: {
      de: 'Rebirth bringt Vorteile, aber zu frühes Zurücksetzen kann deinen Fortschritt bremsen.',
      en: 'Rebirth has benefits, but resetting too early can slow down your progress.',
      fi: 'Rebirth tuo etuja, mutta liian aikainen nollaus voi hidastaa etenemistäsi.',
    },
    verified: true,
  },

  {
    id: 'missions_early',
    category: 'MISSION',
    priority: 4,

    title: {
      de: 'Missionen früh nutzen',
      en: 'Use Missions Early',
      fi: 'Hyödynnä tehtävät aikaisin',
    },

    text: {
      de: 'Missionen liefern nicht nur Ressourcen. Manche Unlocks scheinen an Aufgaben gekoppelt zu sein.',
      en: 'Missions provide more than resources. Some unlocks appear to be tied to specific tasks.',
      fi: 'Tehtävät tarjoavat muutakin kuin resursseja. Osa avauksista näyttää olevan sidottu tiettyihin tehtäviin.',
    },
    verified: false,
  },

  {
    id: 'special_unlocks',
    category: 'DISCOVERY',
    priority: 5,

    title: {
      de: 'Nicht jeder Droid kommt vom Förderband',
      en: 'Not Every Droid Comes From Conveyors',
      fi: 'Kaikki droidit eivät tule liukuhihnalta',
    },

    text: {
      de: 'Community-Hinweise deuten auf Mission-, Event- und Spezial-Unlocks hin.',
      en: 'Community findings suggest mission, event, and special unlock methods.',
      fi: 'Yhteisön havainnot viittaavat tehtävä-, tapahtuma- ja erikoisavauksiin.',
    },
    verified: false,
  },

  {
    id: 'mister_bones',
    category: 'EVENT',
    priority: 5,

    title: {
      de: 'Mister Bones Event Kampf',
      en: 'Mister Bones Event Fight',
      fi: 'Mister Bones -tapahtumataistelu',
    },

    text: {
      de: 'Mister Bones scheint an ein plötzlich auftauchendes Event gekoppelt zu sein. Mehrere Spieler kämpfen gemeinsam gegen große Wellen ständig respawnender Trooper.',
      en: 'Mister Bones appears to be tied to a sudden event. Multiple players fight together against large waves of constantly respawning troopers.',
      fi: 'Mister Bones näyttää liittyvän äkillisesti ilmestyvään tapahtumaan. Useat pelaajat taistelevat yhdessä jatkuvasti uudelleensyntyviä trooper-aaltoja vastaan.',
    },
    verified: false,
  },

  {
    id: 'hidden_conditions',
    category: 'DISCOVERY',
    priority: 4,

    title: {
      de: 'Droids können versteckte Bedingungen haben',
      en: 'Droids May Have Hidden Conditions',
      fi: 'Droideilla voi olla piilotettuja ehtoja',
    },

    text: {
      de: 'Nicht alle Droids scheinen einfach aus Förderbändern zu stammen. Manche könnten an Fortschritt, Events oder spezielle Aktionen gekoppelt sein.',
      en: 'Not all droids seem to come directly from conveyors. Some may depend on progression, events, or special actions.',
      fi: 'Kaikki droidit eivät näytä tulevan suoraan liukuhihnoilta. Osa voi riippua etenemisestä, tapahtumista tai erityisistä toimista.',
    },
    verified: false,
  },

  {
    id: 'rebirth_timing',
    category: 'PROGRESSION',
    priority: 4,

    title: {
      de: 'Rebirth bewusst timen',
      en: 'Time Rebirth Carefully',
      fi: 'Ajoita Rebirth harkiten',
    },

    text: {
      de: 'Vor einem Rebirth kann es sinnvoll sein, seltene Droids, Event-Fortschritte und Unlocks mitzunehmen.',
      en: 'Before rebirthing, it may be worth collecting rare droids, event progress, and unlocks.',
      fi: 'Ennen Rebirthia voi olla hyödyllistä kerätä harvinaisia droideja, tapahtumaetenemistä ja avauksia.',
    },
    verified: false,
  },

  {
    id: 'grey_droids',
    category: 'DISCOVERY',
    priority: 4,

    title: {
      de: 'Graue Droids markieren Ziele',
      en: 'Grey Droids Mark Targets',
      fi: 'Harmaat droidit merkitsevät tavoitteita',
    },

    text: {
      de: 'Fehlende Einträge funktionieren fast wie eine Jagdliste. Unbekannte Droids zeigen sofort, wo noch Lücken bestehen.',
      en: 'Missing entries work almost like a hunt list. Unknown droids instantly reveal where gaps still exist.',
      fi: 'Puuttuvat merkinnät toimivat lähes keräyslistana. Tuntemattomat droidit näyttävät heti, missä aukkoja vielä on.',
    },
    verified: true,
  },

  {
    id: 'private_lobby',
    category: 'TEAM',
    priority: 3,

    title: {
      de: 'Privat statt öffentlich',
      en: 'Private Instead Of Public',
      fi: 'Yksityinen julkisen sijaan',
    },

    text: {
      de: 'Wer Kartenverluste oder unerwartete Mitspieler vermeiden möchte, kann die Lobby vor Spielstart auf privat stellen.',
      en: 'To avoid map losses or unexpected players, you can set the lobby to private before starting.',
      fi: 'Jos haluat välttää karttamenetyksiä tai odottamattomia pelaajia, voit asettaa lobbyn yksityiseksi ennen pelin alkua.',
    },
    verified: true,
  },

  {
    id: 'droidex_missions',
    category: 'PROGRESSION',
    priority: 5,

    title: {
      de: 'Droidex-Missionen lohnen sich',
      en: 'Droidex Missions Matter',
      fi: 'Droidex-tehtävät kannattaa tehdä',
    },

    text: {
      de: 'Jede Droidex-Seite enthält Fortschrittsziele. Das Abschließen kann dauerhafte Boni auf die Credit-Generierung bringen.',
      en: 'Each Droidex page contains progression goals. Completing them can grant permanent credit generation bonuses.',
      fi: 'Jokainen Droidex-sivu sisältää etenemistavoitteita. Niiden suorittaminen voi antaa pysyviä krediittituotannon bonuksia.',
    },
    verified: true,
  },

  {
    id: 'upgrade_chips',
    category: 'PROGRESSION',
    priority: 4,

    title: {
      de: 'Upgrade Chips sparen Zeit',
      en: 'Upgrade Chips Can Save Time',
      fi: 'Upgrade Chipit säästävät aikaa',
    },

    text: {
      de: 'Begleiter-Droids lassen sich später verbessern. Manchmal lohnt es sich, zuerst eine schwächere Variante mitzunehmen.',
      en: 'Companion droids can be upgraded later. Sometimes grabbing a weaker version first is worthwhile.',
      fi: 'Seuralaisdroideja voi parantaa myöhemmin. Joskus heikomman version hankkiminen ensin kannattaa.',
    },
    verified: true,
  },

  {
    id: 'daily_quests',
    category: 'MISSION',
    priority: 3,

    title: {
      de: 'Tägliche Missionen beachten',
      en: 'Check Daily Quests',
      fi: 'Tarkista päivittäiset tehtävät',
    },

    text: {
      de: 'Nach dem ersten Rebirth werden tägliche Aufgaben verfügbar und können zusätzliche Belohnungen liefern.',
      en: 'After your first rebirth, daily quests become available and can provide additional rewards.',
      fi: 'Ensimmäisen Rebirthin jälkeen päivittäiset tehtävät avautuvat ja voivat tarjota lisäpalkintoja.',
    },
    verified: true,
  },
  {
    id: 'pickaxe_companion',
    category: 'PROGRESSION',
    priority: 4,

    title: {
      de: 'Spitzhacken-Bonus nutzen',
      en: 'Use Pickaxe Bonuses',
      fi: 'Hyödynnä hakkubonukset',
    },

    text: {
      de: 'Einige Begleiter scheinen Boni zu geben, die den Fortschritt an der Spitzhacke beschleunigen. Das kann den Droid-Bau spürbar verkürzen.',
      en: 'Some companions appear to provide bonuses that speed up pickaxe-related progress. This can noticeably reduce droid build time.',
      fi: 'Jotkin seuralaiset näyttävät antavan bonuksia, jotka nopeuttavat hakkuun liittyvää etenemistä. Tämä voi lyhentää droidien rakennusaikaa merkittävästi.',
    },
    verified: true,
  },
];
