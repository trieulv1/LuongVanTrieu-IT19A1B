class Student {
    constructor(name, mark, gender, subjects) {
        this.name = name
        this.mark = mark
        this.gender = gender
        this.subjects = subjects
    }
}

var s1 = new Student('Tân', 8, 0, [{ title: 'toán', mark: 6 }, { title: 'lý', mark: 7 }])
var s2 = new Student('Hà', 5, 0, [{ title: 'toán', mark: 7 }, { title: 'lý', mark: 4 }])
var s3 = new Student('Luyến', 4.5, 1, [{ tiile: 'toán', mark: 4 }, { title: 'lý', mark: 5 }])
var s4 = new Student('Ngọc', 9, 1, [{ title: 'toán', mark: 8 }, { title: 'lý', mark: 6 }])
var s5 = new Student('Tú', 8.5, 0, [{ title: 'toán', mark: 8 }, { title: 'lý', mark: 8 }])
var s6 = new Student('Thủy', 8, 0, [{ title: 'toán', mark: 9 }, { title: 'lý', mark: 6 }])
var s7 = new Student('Thúy', 6, 1, [{ title: 'toán', mark: 4 }, { title: 'lý', mark: 9 }])
var s8 = new Student('Ngà', 0, 0, [{ title: 'toán', mark: 3 }, { title: 'lý', mark: 0 }])
var s9 = new Student('Tích', 7, 0, [{ title: 'toán', mark: 7 }, { title: 'lý', mark: 5 }])
var s10 = new Student('Tư', 0, 0, [{ title: 'toán', mark: 2 }, { title: 'lý', mark: 0 }])

let array = []
array.push(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10)

var clone = [...array]

// Duyệt và ghép mảng lại với nhau
var sort = clone.reduce((init, value) => {
    var Diem = [value.mark]
    return init.concat(Diem)
}, [])

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn
let sortDecrease = sort.sort((a, b) => {
    return a - b
})
console.log(sortDecrease)

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé
let sortAscending = sort.sort((a, b) => {
    return b - a
})
console.log(sortAscending)

// Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0
let studentFilter = clone.filter((value) => {
    return value.gender === 1 && value.mark > 5
})
console.log(studentFilter)

// Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0
let studentSubjects = clone.filter((value) => {
    return value.subjects[0].mark > 8 || value.subjects[1].mark > 8
})
console.log(studentSubjects)

// Duyệt và ghép mảng lại với nhau (subjects)
let subjectsMinMax = clone.reduce((init, value) => {
    const result = [value.subjects[0].mark]
    let a = init.concat(result)
    return a
}, [])
console.log(subjectsMinMax)

// Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất
const subjectsMax = Math.max(...subjectsMinMax)
const subjectsMin = Math.min(...subjectsMinMax)
console.log(`
Sinh viên có điểm môn toán lớn nhất là: ${subjectsMax}
Sinh viên có điểm môn toán nhỏ nhất là: ${subjectsMin}
`)

// Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0
let deleteStudent = clone.filter((value) => {
    return value.mark !== 0
})
console.log(deleteStudent)

// Thêm 03 sinh viên mới vào danh sách
var s11 = new Student('TT', 8, 0, [{ title: 'toán', mark: 6 }, { title: 'lý', mark: 6 }])
var s12 = new Student('VV', 7, 0, [{ title: 'toán', mark: 7 }, { title: 'lý', mark: 5 }])
var s13 = new Student('HH', 9, 0, [{ title: 'toán', mark: 8 }, { title: 'lý', mark: 8 }])