window.onload = function () {
    const entries = [
        {
            name: 'Workout',
            created: new Date(),
            muscleGroups: ['Hamstrings', 'Calves', 'Quads', 'Glutes'],
            excerises: ['Barbell squat', 'Barbell Sumo Squat', 'Hack Squat', 'Smith Machine Hip Thrusts', 'Hamstring Machine Curls', 'Smith Machine Calf Raises', 'Calf Extensions'],
            sets: '',
            reps: ''
        },
        {
            name: 'Workout 2',
            created: new Date(),
            muscleGroups: ['chest', 'Triceps', 'Shoulders'],
            excerises: ['Barbell Bench Press'],
            sets: '',
            reps: ''
        },
    ]

    entries.forEach(function (entry) {
        const paragraph = document.querySelector('#journal1');
        paragraph.innerText = `${entry.name} \n sets: ${entry.sets} \n reps: ${entry.reps}`

        const SecondParagraph = document.querySelector('#journal2');
        SecondParagraph.innerText = entry.created.toLocaleString()
    })
}
