let students = [
    {name: "João",
    note1: 10,
    note2: 8.2,
    },

    {name: "Carol",
    note1: 5.1,
    note2: 7.2,
    },

    {name: "Ana Clara",
    note1: 7.1,
    note2: 6.9,
    },
]

let media, approved
function calculateMedia(student) {
    media = (student.note1 + student.note2) / 2
    approved = media >= 7
    if(approved) {
        alert(`A média do(a) ${student.name} é: ${media}.
        Parabéns! Você foi aprovado(a)`)
    } else {
        alert(`A média do(a) ${student.name} é: ${media}.
        Não foi dessa vez. Tente novamente!`)
    }
}

for(let student of students) {
    calculateMedia(student)
}