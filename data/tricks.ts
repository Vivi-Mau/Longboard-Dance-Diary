export type Difficulty = 'easy' | 'medium' | 'advanced'
export type Locale = 'en' | 'de'

export interface Trick {
  id: string
  name: string
  difficulty: Difficulty
  description: { en: string; de: string }
  steps: { en: string[]; de: string[] }
  image?: string
}

export interface TrickCategory {
  id: string
  icon: string
  name: { en: string; de: string }
  tricks: Trick[]
}

export const trickCategories: TrickCategory[] = [
  {
    id: 'dancing',
    icon: 'ph:person-simple-walk',
    name: { en: 'Dancing', de: 'Dancing' },
    tricks: [
      {
        id: 'dancing-carving',
        name: 'Carving',
        difficulty: 'easy',
        description: {
          en: 'Carving from side to side.',
          de: 'Carving',
        },
        steps: {
          en: [
            'Legs a little more than should width on the board, horizontal to the driving direction.',
            'Move your body weight from on side to another.',
          ],
          de: [
            'Verlagere dein Gewicht von einer Seite zur anderen.',
          ],
        },
      },
      {
        id: 'dancing-cross-step-forward',
        name: 'Cross Step (Forward)',
        difficulty: 'easy',
        description: {
          en: 'The foundational cross-step walking motion.',
          de: 'Der grundlegende cross-step.',
        },
        steps: {
          en: [
            'Start in your natural stance on the board.',
            'Bring your front food back to your back food.',
            'Lift your back foot and cross it over your front foot.',
            'Plant it firmly, then bring the back foot forward to restart the cycle.',
            'Keep knees slightly bent.',
          ],
          de: [
            'Beginne in deiner Position am hinteren Teil des Boards.',
            'Hebe deinen vorderen Fuß und kreuze ihn über deinen hinteren.',
            'Setze ihn fest auf, dann bringe den hinteren Fuß nach vorne.',
            'Knie leicht gebeugt.',
          ],
        },
      },
      {
        id: 'dancing-cross-step-backward',
        name: 'Cross Step (Backward)',
        difficulty: 'easy',
        description: {
          en: 'The reverse cross step, starts at the nose while the board rolls forward.',
          de: '',
        },
        steps: {
          en: [
            'Start near the nose of the board.',
            'Bring your back food to the front food.',
            'Cross your front foot behind your back foot.',
            'Shift weight and step the front foot back.',
            'Repeat in a flowing motion.',
          ],
          de: [
            'Starte nahe der Nose des Boards.',
            'Kreuze den vorderen Fuß hinter deinen hinteren.',
            'Gewicht verlagern und Vorderfuß nach hinten setzen.',
            'Wiederhole fließend.',
          ],
        },
      },
      {
        id: 'dancing-peter-pan',
        name: 'Peter Pan',
        difficulty: 'easy',
        image: '/sketches/peter-pan.svg',
        description: {
          en: 'Crossing feet in driving direction',
          de: 'Gekreuzte Beine in Fahrtrichtung',
        },
        steps: {
          en: [
            'Go with the front foot in the middle on the side of the board and carve',
            'Toes point in driving direction',
            'The back foot crosses over the front foot to the other side, also carve to the other side',
          ],
          de: [
            'Gehe mit dem vorderen Fuß in die Mitte auf die Seite des Boards und carve',
            'Zehen zeigen in Fahrtrichtung',
            'Der hintere Fuß kreuzt über den vorderen Fuß auf die andere Seite, ebenfalls zur anderen Seite carven',
          ],
        },
      },
      {
        id: 'dancing-ghost-ride',
        name: 'Ghost Ride',
        difficulty: 'easy',
        description: {
          en: 'Step off the moving board (with the back leg crossing over your front leg), let it roll freely beside you, then step back on.',
          de: 'Steige vom fahrenden Board ab, lass es neben dir rollen, dann wieder aufsteigen.',
        },
        steps: {
          en: [
            'Build a comfortable rolling speed.',
            'Step off with your back foot, then your front foot.',
            'Let the board roll forward beside you.',
            'Step back on starting with your front foot, then back foot.',
          ],
          de: [
            'Baue angenehme Rollgeschwindigkeit auf.',
            'Steige mit dem hinteren Fuß ab, dann dem vorderen.',
            'Lass das Board neben dir rollen.',
            'Wieder aufsteigen: zuerst Vorderfuß, dann hinten.',
          ],
        },
      },
      {
        id: 'dancing-step-180',
        name: '180° Step',
        difficulty: 'easy',
        description: {
          en: 'A 180° step on the nose or tail, switching your stance.',
          de: 'Ein 180°-Step auf Nose oder Tail mit Standeswechsel.',
        },
        steps: {
          en: [
            'Move front food on the side, toes in driving direction, .',
          ],
          de: [
            
          ],
        },
      },
      {
        id: 'dancing-pirouette',
        name: 'Pirouette',
        difficulty: 'medium',
        description: {
          en: 'Spin a full 360° on the rolling board using arm momentum.',
          de: 'Drehe dich 360° auf dem rollenden Board mit Schwung der Arme.',
        },
        steps: {
          en: [
            'Center your weight equally on both feet.',
            'Wind your arms to one side to load the spin.',
            'Release and rotate 360°, keeping weight centered.',
            'Spot a fixed point ahead to stop the spin cleanly.',
          ],
          de: [
            'Gewicht gleichmäßig auf beide Füße zentrieren.',
            'Arme zur Seite aufwickeln, um Schwung zu laden.',
            'Loslassen und 360° drehen, Gewicht zentriert.',
            'Einen fixen Punkt fixieren, um sauber zu stoppen.',
          ],
        },
      },
    ],
  },
  {
    id: 'freestyle',
    icon: 'ph:lightning',
    name: { en: 'Freestyle', de: 'Freestyle' },
    tricks: [
      {
        id: 'freestyle-manual',
        name: 'Manual',
        difficulty: 'easy',
        description: {
          en: 'Balance on the rear two wheels while rolling forward.',
          de: 'Auf den zwei hinteren Rollen balancieren, während du vorwärtsrollst.',
        },
        steps: {
          en: [
            'Roll at a comfortable speed.',
            'Shift weight to your back foot to lift the front wheels.',
            'Find and hold the balance point.',
            'Shift weight forward to lower the nose gently.',
          ],
          de: [
            'Mit angenehmer Geschwindigkeit rollen.',
            'Gewicht auf den hinteren Fuß verlagern, um Frontrollen zu heben.',
            'Gleichgewichtspunkt finden und halten.',
            'Gewicht nach vorne verlagern, um Nose sanft abzusenken.',
          ],
        },
      },
      {
        id: 'freestyle-nose-manual',
        name: 'Nose Manual',
        difficulty: 'medium',
        description: {
          en: 'Balance on the front two wheels while rolling forward.',
          de: 'Auf den zwei vorderen Rollen balancieren, während du vorwärtsrollst.',
        },
        steps: {
          en: [
            'Roll at moderate speed.',
            'Shift weight firmly to your front foot.',
            'Lift the rear wheels off the ground.',
            'Lean slightly forward to hold the balance.',
          ],
          de: [
            'Mit moderater Geschwindigkeit rollen.',
            'Gewicht fest auf den Vorderfuß verlagern.',
            'Hinterräder vom Boden heben.',
            'Leicht nach vorne lehnen, um Balance zu halten.',
          ],
        },
      },
      {
        id: 'freestyle-nose-pivot',
        name: 'Nose Pivot',
        difficulty: 'easy',
        description: {
          en: 'Pivot the board 180° on the nose truck while rolling.',
          de: 'Das Board 180° auf dem Nose-Truck drehen, während du rollst.',
        },
        steps: {
          en: [
            'Shift weight to the nose.',
            'Lift the tail and pivot your body and board 180°.',
            'Land in switch and continue riding.',
          ],
          de: [
            'Gewicht zur Nose verlagern.',
            'Tail heben und Körper sowie Board 180° drehen.',
            'Im Switch landen und weiterfahren.',
          ],
        },
      },
      {
        id: 'freestyle-nose-shove-it',
        name: 'Nose Shove-It',
        difficulty: 'easy',
        description: {
          en: 'Scoop the board 180° beneath your feet and land back on it.',
          de: 'Das Board 180° unter deinen Füßen drehen und wieder darauf landen.',
        },
        steps: {
          en: [
            'Pop lightly with your front foot on the nose.',
            'Scoop your front foot to spin the board 180°.',
            'Keep your feet hovering above the board.',
          ],
          de: [
            'Leicht mit dem Hinterfuß auf dem Tail poppen.',
            'Hinterfuß einschieben, um Board 180° zu drehen.',
            'Füße über dem Board schweben lassen.',
          ],
        },
      },
      {
        id: 'freestyle-shove-it',
        name: 'Shove-It',
        difficulty: 'medium',
        description: {
          en: 'Scoop the board 180° beneath your feet and land back on it.',
          de: 'Das Board 180° unter deinen Füßen drehen und wieder darauf landen.',
        },
        steps: {
          en: [
            'Pop lightly with your back foot on the tail.',
            'Scoop your back foot to spin the board 180°.',
            'Keep your feet hovering above the board.',
            'Land bolts and roll away clean.',
          ],
          de: [
            'Leicht mit dem Hinterfuß auf dem Tail poppen.',
            'Hinterfuß einschieben, um Board 180° zu drehen.',
            'Füße über dem Board schweben lassen.',
            'Sauber auf den Trucks landen und wegrollen.',
          ],
        },
      },
      {
        id: 'freestyle-kickflip',
        name: 'Kickflip',
        difficulty: 'advanced',
        description: {
          en: 'Pop and flick the board to spin it along its lengthwise axis, then land.',
          de: 'Board poppen und flippen, damit es sich entlang seiner Längsachse dreht, dann landen.',
        },
        steps: {
          en: [
            'Position front foot diagonally, back foot on tail.',
            'Pop the tail and slide front foot up and off the edge.',
            'Board flips 360° along its length.',
            'Catch it with both feet and land bolts.',
          ],
          de: [
            'Vorderfuß diagonal positionieren, Hinterfuß auf dem Tail.',
            'Tail poppen und Vorderfuß hoch und über die Kante schieben.',
            'Board dreht sich 360° entlang seiner Länge.',
            'Mit beiden Füßen fangen und auf den Trucks landen.',
          ],
        },
      },
    ],
  },
  {
    id: 'lines-combos',
    icon: 'ph:arrows-clockwise',
    name: { en: 'Lines & Combos', de: 'Lines & Kombos' },
    tricks: [
      {
        id: 'combo-dance-to-freestyle',
        name: 'Dance → Freestyle Line',
        difficulty: 'medium',
        description: {
          en: 'Link a cross step sequence directly into a shove-it or manual for a flowing line.',
          de: 'Kreuzschrittsequenz direkt in einen Shove-It oder Manual verbinden.',
        },
        steps: {
          en: [
            'Start with 3–4 forward cross steps.',
            'On the last step, shift weight back to the tail.',
            'Scoop into a shove-it, or hold for a manual.',
            'Land and exit cleanly.',
          ],
          de: [
            'Mit 3–4 vorwärts Kreuzschritten beginnen.',
            'Beim letzten Schritt Gewicht nach hinten verlagern.',
            'In einen Shove-It einschieben oder für ein Manual halten.',
            'Sauber landen und aussteigen.',
          ],
        },
      },
      {
        id: 'combo-pivot-to-dance',
        name: 'Pivot → Dance Combo',
        difficulty: 'advanced',
        description: {
          en: 'Enter a 180° pivot and immediately flow into a cross step dance sequence.',
          de: '180°-Pivot fahren und sofort in Kreuzschritt-Tanzsequenz übergehen.',
        },
        steps: {
          en: [
            'Ride regular and initiate a 180° tail pivot.',
            'As you land in switch, begin a cross step forward.',
            'Continue the cross step pattern for 4+ steps.',
            'Close with a pirouette or pivot back to regular.',
          ],
          de: [
            'Normal fahren und 180°-Tail-Pivot einleiten.',
            'Beim Landen im Switch direkt Kreuzschritt vorwärts beginnen.',
            'Kreuzschritt-Muster für 4+ Schritte fortsetzen.',
            'Mit Pirouette oder Pivot zurück zur Normalposition schließen.',
          ],
        },
      },
      {
        id: 'combo-ghost-reentry',
        name: 'Ghost Ride Re-Entry',
        difficulty: 'medium',
        description: {
          en: 'Step off, spin 180° while off the board, and re-enter facing the other direction.',
          de: 'Absteigen, 180° ohne Board drehen und in die andere Richtung wieder einsteigen.',
        },
        steps: {
          en: [
            'Perform a standard ghost ride exit.',
            'While off the board, spin your body 180°.',
            'Re-step onto the board in switch stance.',
            'Flow into your next trick.',
          ],
          de: [
            'Standard Ghost Ride Ausstieg durchführen.',
            'Während du abstehst, Körper 180° drehen.',
            'Im Switch-Stand wieder aufsteigen.',
            'In den nächsten Trick übergehen.',
          ],
        },
      },
    ],
  },
  {
    id: 'handtricks',
    icon: 'ph:hand-waving',
    name: { en: 'Hand Tricks', de: 'Handtricks' },
    tricks: [
      {
        id: 'hand-tiger-claw',
        name: 'Tiger Claw',
        difficulty: 'easy',
        description: {
          en: 'Pop the nose up, grab it with your hand, flip the board over, and land.',
          de: 'Nose hochwerfen, mit der Hand greifen, Board umdrehen und landen.',
        },
        steps: {
          en: [
            'Kick the tail down to pop the nose up.',
            'Grab the nose with your front hand.',
            'Flip the board 180° and release.',
            'Land with feet over the trucks.',
          ],
          de: [
            'Tail kicken, um die Nose hochzuwerfen.',
            'Nose mit der Vorderhand greifen.',
            'Board 180° flippen und loslassen.',
            'Mit Füßen über den Trucks landen.',
          ],
        },
      },
      {
        id: 'hand-half-moon',
        name: 'Half Moon',
        difficulty: 'easy',
        description: {
          en: '.',
          de: '.',
        },
        steps: {
          en: [
            'Pop the board on the tail and catch with the front hand.',
            'Turn your board 180, catch it with the other hand and bring it back to the ground',
          ],
          de: [
            '',
            '.',
          ],
        },
      },
    ],
  },
]
