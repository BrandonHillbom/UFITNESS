window.onload = function () {
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

    const setCount = document.getElementById('setCount')
    const repCount = document.getElementById('repCount')

    const form = document.querySelector('form')
    form.onsubmit = function (event) {
        event.preventDefault();

        
        }
    }