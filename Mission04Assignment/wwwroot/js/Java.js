$('#btnSend').click(function () {
    // Get all the grades
    let grade = (($('#assignments').val() * .5) + ($('#group_projects').val() * .1) + ($('#quizzes').val() * .1) + ($('#midterm').val() * .1) + ($('#final').val() * .1) + ($('#intex').val() * .1)).toFixed(1)

    // Initializes the var and remove class form tag
    let letterGrade = "";
    $('#output').removeAttr("class");

    // Assigns the letter grade and gives styling 
    if (grade >= 94) {
        $('#output').addClass('good');
        letterGrade = 'A';
    } else if (grade >= 90) {
        $('#output').addClass('good');
        letterGrade = 'A-';
    } else if (grade >= 87) {
        $('#output').addClass('okay');
        letterGrade = 'B+';
    } else if (grade >= 84) {
        $('#output').addClass('okay');
        letterGrade = 'B';
    } else if (grade >= 80) {
        $('#output').addClass('okay');
        letterGrade = 'B-';
    } else if (grade >= 77) {
        $('#output').addClass('bad');
        letterGrade = 'C+';
    } else if (grade >= 74) {
        $('#output').addClass('bad');
        letterGrade = 'C';
    } else if (grade >= 70) {
        $('#output').addClass('bad');
        letterGrade = 'C-';
    } else if (grade >= 67) {
        $('#output').addClass('bad');
        letterGrade = 'D+';
    } else if (grade >= 64) {
        $('#output').addClass('bad');
        letterGrade = 'D';
    } else if (grade >= 60) {
        $('#output').addClass('bad');
        letterGrade = 'D-';
    }
    else {
        $('#output').addClass('bad');
        letterGrade = 'E';
    }

    // Var to hold output text & sets output tag text to var
    let output = ("Final grade: " + letterGrade);
    $('#output').text(output)
})