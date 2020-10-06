const entries = [
    {
        name: 'Workout 1',
        created: new Date('2020-07-30'),
        muscleGroups: ['Hamstrings', 'Calves', 'Quads', 'Glutes'],
        excerises: ['BB squat', 'BB Sumo Squat', 'Hack Squat', 'Smith Machine Hip Thrusts', 'Hamstring Machine Curls', 'Smith Machine Calf Raises', 'Calf Extensions'],
        sets: 4,
        reps: 10
    },
    {
        name: 'Workout 2',
        created: new Date('2020-08-01'),
        muscleGroups: ['chest', 'Triceps', 'Shoulders'],
        excerises: ['BB Bench Press', 'DB Flye', 'DB Squeeze Press', 'DB Incline Flye', 'BB Incline Bench Press', 'Cable Rope Pushdown', 'Bench Dips', 'DB Backscratcher', 'DB Arnold Press', 'Cable Side Raise', 'DB Cross Body Front Raise'],
        sets: 4,
        reps: 12
    },
]
const renderCards = () => {
    const journalEntriesEl = document.getElementById('journal-entries')
    journalEntriesEl.innerHTML = ''
    journalEntriesEl.classList.add('card-deck')

    //Turn each entry into text on the document
    entries.forEach(function (entry) {
        const cardEl = document.createElement('div')
        cardEl.classList.add('card')
        const entryEl = document.createElement('div')
        entryEl.classList.add('card-body')

        //WORKOUT TITLE text
        const titleEl = document.createElement('h5')
        titleEl.classList.add('card-title')
        titleEl.innerText = entry.name
        entryEl.appendChild(titleEl)

        //MUSCLE GROUPS
        const muscleGroupsEl = document.createElement('div')

        //Muscle Groups header
        const muscleGroupsHeadingEl = document.createElement('p')
        muscleGroupsHeadingEl.classList.add('font-weight-bold')
        muscleGroupsHeadingEl.innerText = 'Muscle Groups'
        muscleGroupsEl.appendChild(muscleGroupsHeadingEl)

        //muscle groups as items in a list
        const muscleGroupsListEl = document.createElement('ul')
        entry.muscleGroups.forEach(function (muscleGroup) {
            const muscleGroupListItemEl = document.createElement('li')
            muscleGroupListItemEl.innerText = muscleGroup
            muscleGroupsListEl.appendChild(muscleGroupListItemEl)

        })

        //append muscle group list to the entry div element
        muscleGroupsEl.appendChild(muscleGroupsListEl)
        entryEl.appendChild(muscleGroupsEl)

        //EXERCISES
        const exercisesEl = document.createElement('div')

        //Exercises Header
        const exercisesHeadingsEl = document.createElement('p')
        exercisesHeadingsEl.classList.add('font-weight-bold')
        exercisesHeadingsEl.innerText = 'Exercises'
        exercisesEl.appendChild(exercisesHeadingsEl)

        //exercises as items in a list
        const exercisesListEl = document.createElement('ul')
        entry.excerises.forEach(function (exercise) {
            const exerciseListItemEl = document.createElement('li')
            exerciseListItemEl.innerText = exercise
            exercisesListEl.appendChild(exerciseListItemEl)
        })

        //append exercise list to the entry div element
        exercisesEl.appendChild(exercisesListEl)
        entryEl.appendChild(exercisesEl)

        //SET text
        const setEl = document.createElement('p')
        setEl.classList.add('card-text')
        setEl.innerText = `Sets: ${entry.sets}`
        entryEl.appendChild(setEl)

        //REP text
        const repEl = document.createElement('p')
        repEl.classList.add('card-text')
        repEl.innerText = `Reps: ${entry.reps}`
        entryEl.appendChild(repEl)

        //DATE text
        const dateEl = document.createElement('p')
        dateEl.classList.add('small')
        dateEl.classList.add('text-muted')
        dateEl.innerText = entry.created.toLocaleDateString()
        entryEl.appendChild(dateEl)

        cardEl.appendChild(entryEl)
        journalEntriesEl.appendChild(cardEl)


    })
}

window.onload = function () {

    renderCards()

    const muscleGroupArray = [
        'Chest',
        'Triceps',
        'Biceps',
        'Back/Lats',
        'Shoulders',
        'Traps',
        'Legs',
        'Abs',
        'Forearms',
        'Other',
    ]

    const equipmentArray = [
        'Machine',
        'Dumbell',
        'Smith Machine',
        'Kettle Bell',
        'Medicine Ball',
        'Barbell',
        'EZ Bar',
        'Cable (no add-ons)',
        'Dual Cable',
        'Cable Handles',
        'Cable EZ Bar',
        'Cable straight Bar',
        'Cable Rope',
        'Cable Long Bar',
        'Cable Close Palm Facing Bar',
        'Cable Wide Palm Facing Bar',
        'Cable W-Bar',
        'Yoga Ball',
    ]

    const workoutVariationArray = [
        'Standard',
        'Dropsets',
        'Pyramid Sets',
        'Burnouts',
        'Burnouts w/ Isometric Hold',
        'Negatives',
        'Isometric Holds',
        'Alternating',
    ]

    const exerciseArrray = [
        //Chest
        'Bench Press',
        'Wide Grip Bench Press',
        'Close Grip Bench Press',
        'Incline Bench Press',
        'Wide Grip Incline Bench Press',
        'Close Grip Incline Bench Press ',
        'Decline Bench Press',
        'Wide Grip Decline Bench Press',
        'Close Grip Decline Bench Press',
        'Incline Flye',
        'Flye',
        'decline flye',
        'Chest Press',
        'Incline Chest Press',
        'Decline Chest Press',
        'Squeeze Press',
        'Pushups',
        'military pushup',
        'Wide pushups',
        'Diamond Pushups',
        'Incline Pushup',
        'Decline Pushup',

        //Triceps
        'Pushdown',
        'SA Pushdown',
        'Supinated Grip SA Pushdown',
        'Tricep Kickbacks',
        'Backscratchers',
        'Skullcrushers',
        'Dips(Bench)',
        'Dips',
        'Incline Reverse Grip Tricep Push ',

        //Biceps
        'Wide Grip Curl',
        'Close Grip Curl',
        'Curl',
        'Hammer Curl',
        'Reverse Grip Curl',
        'Palm-up Curl',
        'Cross Body Curl',
        'Preacher Curl',
        'Zottman Curl',
        'Curl w/ Twist at Top',
        'Incline Seated Curl',
        'Incline Laying Curl',

        //Back/Lats
        'Row',
        'SA Row',
        'Supinated Grip Row',
        'Pronated Grip Row',
        'Palm Facing Grip Row',
        'Pulldown',
        'SA Pulldown',
        'Pullup',
        'Chinup',
        'Muscle-up',
        'Palm Facing Pullup',
        'Rack Pulls',
        'Deadlift',
        'Pullovers',
        'Standing Lat Extensions',

        //Shoulders
        'Shoulder Press',
        'Arnold Press',
        'Cross Body Front Raise',
        'Front Raise',
        'Straight Arm Pushdown',
        'Front to Side Raise',
        '3 Angled Raise',
        'Side Raise',
        'Eagle Flaps',
        'Chin Pulls',
        'Reverse Flyes',
        'Seated Reverse Flyes',
        'Standing Reverse Flyes',
        'Face Pulls',
        'Rear Delt Row',

        //Traps
        'Shrugs',
        '30° Shrug',
        'Trap Rolls',
        'Shrug (Seated Row Form)',

        //Legs
        'Squat',
        'Front Squat',
        'Back Squat',
        'Hack squat',
        'Split Squat',
        'Lunge',
        'Cannonball Squat',
        'Close Squat',
        'Sumo Squat',
        'Leg Press',
        'Low Leg Press',
        'High Leg Press',
        'Wide Leg Press',
        'Close Leg Press',
        'SL Quad Extension',
        'Quad Extension',
        'SL Ham Curl',
        'Ham Curl',
        'Laying Ham Curl',
        'Hip Abduction',
        'Hip Adduction',
        'Glute Kickback',
        'Lateral Kickout',
        'Glute Bridge',
        'Hip Thrust',
        'Donkey Kick',
        'Calf Raise',
        'Calf Extension',
        'Seated Calf Raise',

        //Abs
        'Crunches',
        'Situps',
        'Curl Ups',
        'Knee Tucks',
        'V-ups',
        'Bicycles',
        'Russian Twists',
        'Twists',
        'Woodchops',
        'Low to High Woodchops',
        'Knee to Elbow Taps',
        'Spiderman Planks',
        'Toe Taps',
        'Side Bends',
        'Leg Raise w/ Hip Lift',
        'Reverse Crunches',
        'Hanging Leg Raises',
        'Hanging Knee Tucks',
        'Hanging Circle Raises',
        'Alphabet Leg Raises',
        'Flutter Kicks',
        'Scissors',
        'Plank',
        'Serratus Plank Push',
        'Seated Crunch',
        'Seated Flex',
        'Decline Situps',
        'Decline Cross Situps',
        'Decline Crunches',

        //Forearms
        'Wrist Curls',
        'Reverse Wrist Curls',
        'Wrist Rolls',
    ]

    const setCountEl = document.getElementById('setCount')
    const repCountEl = document.getElementById('repCount')
    const selectMuscleGroupsEl = document.getElementById('targetMuscleGroups')
    const workoutTitleEl = document.getElementById('workoutTitle')
    const addRepEl = document.getElementById('repsAdd')
    const MuscleGroupsEquipmentEl = document.getElementById('targetExerciseEquipment')
    const selectExerciseEl = document.getElementById('targetExerciseGroups')






    setCountEl.oninput = function () {
        // this code will get executed when we input some value in the input
        for (let count = 0; count < setCountEl.value -1; count++) {
            const addRepschildEl = addRepEl.children
            const firstChildEl = addRepschildEl[0]
            const cloneChildEl = firstChildEl

            if (count != setCountEl.value) {
                const addedRepEl = document.createElement('div')
                addedRepEl.innerHTML = cloneChildEl
                addRepEl.appendChild(addedRepEl)
                console.log(addedRepEl)
                console.log(cloneChildEl)
                console.log('break')
            }
        }
    }










    muscleGroupArray.forEach((muscleGroup) => {
        const optionEl = document.createElement('option')
        optionEl.innerText = muscleGroup
        optionEl.value = muscleGroup

        selectMuscleGroupsEl.appendChild(optionEl)
    })
    /*
       equipmentArray.forEach((equipment) => {
           const optionEl = document.createElement('option')
           optionEl.innerText = equipment
           optionEl.value = equipment
   
           selectEquipment.appendChild(optionEl)
       }) */

    exerciseArrray.forEach((exercise) => {
        const optionEl = document.createElement('option')
        optionEl.innerText = exercise
        optionEl.value = exercise

        selectExerciseEl.appendChild(optionEl)
    })






    const formEl = document.querySelector('form')
    formEl.onsubmit = function (event) {
        event.preventDefault();

        const selectedMuscleGroups = document.querySelectorAll('#targetMuscleGroups option:checked')
        const selectedMuscleGroupValues = Array.from(selectedMuscleGroups).map(el => el.value)

        /* const selectedEquipment = document.querySelectorAll('#targetExerciseEquipment option:checked')
         const equipmentValues = Array.from(selectedEquipment).map(el => el.value) */

        const selectedExercises = document.querySelectorAll('#targetExerciseGroups option:checked')
        const selectedExerciseValues = Array.from(selectedExercises).map(el => el.value)

        entries.unshift({
            name: workoutTitleEl.value,
            created: new Date(),
            muscleGroups: selectedMuscleGroupValues,
            excerises: selectedExerciseValues,
            sets: setCountEl.value,
            reps: repCountEl.value,
        })

        renderCards()




    }
}