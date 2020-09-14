window.onload = function () {
    const entries = [
        {
            name: 'Workout 1',
            created: new Date('2020-07-30'),
            muscleGroups: ['Hamstrings', 'Calves', 'Quads', 'Glutes'],
            excerises: ['Barbell squat', 'Barbell Sumo Squat', 'Hack Squat', 'Smith Machine Hip Thrusts', 'Hamstring Machine Curls', 'Smith Machine Calf Raises', 'Calf Extensions'],
            sets: 4,
            reps: 10
        },
        {
            name: 'Workout 2',
            created: new Date('2020-08-01'),
            muscleGroups: ['chest', 'Triceps', 'Shoulders'],
            excerises: ['Barbell Bench Press'],
            sets: 4,
            reps: 12
        },
    ]
    const journalEntriesEl = document.getElementById('journal-entries')
    journalEntriesEl.innerHTML = ''

    //Turn each entry into text on the document
    entries.forEach(function (entry) {
        const entryEl = document.createElement('div')

        //WORKOUT TITLE text
        const titleEl = document.createElement('h2')
        titleEl.innerText = entry.name
        entryEl.appendChild(titleEl)

        //DATE text
        const dateEl = document.createElement('p')
        dateEl.innerText = entry.created.toLocaleDateString()
        entryEl.appendChild(dateEl)

        //MUSCLE GROUPS
        const muscleGroupsEl = document.createElement('div')
        muscleGroupsEl.setAttribute('id', 'inlineListItems')

        //Muscle Groups header
        const muscleGroupsHeadingEl = document.createElement('h3')
        muscleGroupsHeadingEl.setAttribute('class', 'heading3')
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
        const exercisesHeadingsEl = document.createElement('h3')
        exercisesHeadingsEl.setAttribute('class', 'heading3')
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
        setEl.innerText = `Sets: ${entry.sets}`
        entryEl.appendChild(setEl)

        //REP text
        const repEl = document.createElement('p')
        repEl.innerText = `Reps: ${entry.reps}`
        entryEl.appendChild(repEl)

        journalEntriesEl.appendChild(entryEl)
    })
}
