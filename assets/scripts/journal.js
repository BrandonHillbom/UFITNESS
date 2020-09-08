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

    entries.forEach(function (entry) {
        const entryEl = document.createElement('div')

        const titleEl = document.createElement('h2')
        titleEl.innerText = entry.name
        entryEl.appendChild(titleEl)

        const dateEl = document.createElement('p')
        dateEl.innerText = entry.created.toLocaleDateString()
        entryEl.appendChild(dateEl)

        const muscleGroupsEl = document.createElement('div')
        const muscleGroupsHeadingEl = document.createElement('h3')
        muscleGroupsHeadingEl.innerText = 'Muscle Groups'
        muscleGroupsEl.appendChild(muscleGroupsHeadingEl)
        const muscleGroupsListEl = document.createElement('ul')

        entry.muscleGroups.forEach(function (muscleGroup) {
            const muscleGroupListItemEl = document.createElement('li')
            muscleGroupListItemEl.innerText = muscleGroup
            muscleGroupsListEl.appendChild(muscleGroupListItemEl)

        })
        muscleGroupsEl.appendChild(muscleGroupsListEl)
        entryEl.appendChild(muscleGroupsEl)


        const exercisesEl = document.createElement('p')
        exercisesEl.innerText = entry.excerises
        entryEl.appendChild(exercisesEl)

        const setEl = document.createElement('p')
        setEl.innerText = `Sets: ${entry.sets}`
        entryEl.appendChild(setEl)

        const repEl = document.createElement('p')
        repEl.innerText = `Reps: ${entry.reps}`
        entryEl.appendChild(repEl)

        journalEntriesEl.appendChild(entryEl)
    })
}
