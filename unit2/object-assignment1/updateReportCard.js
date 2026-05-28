/*

updateReportCard
Accepts two parameters, a report card and a new grade (a number between 0 and 100)
Updates the report card's lowest grade, highest grade, and average grade
Adds the new grade to the report card's grades
Examples

let reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};

updateReportCard(reportCard, 62) =>
{
    lowestGrade: 62,
    highestGrade: 96,
    averageGrade: 77,
    grades: [70, 96, 80, 62]
}

updateReportCard(reportCard, 100) =>
{
    lowestGrade: 70,
    highestGrade: 100,
    averageGrade: 86.5,
    grades: [70, 96, 80, 100]
}
    */

function updateReportCard(reportCard, newGrade){
    // push new grade
    reportCard.grades.push(newGrade);

    // newGrade is lower than lowest grade
    if(newGrade < reportCard.lowestGrade){
        reportCard.lowestGrade = newGrade;
    }
    // newGrade is higher than highest grade
    if(newGrade > reportCard.highestGrade){
        reportCard.highestGrade = newGrade;
    }

    // 70 + 96 + 80 + 100 = 346
    // 346/4 = 86.5

    let total = 0;

    for(let i = 0; i < reportCard.grades.length; i++){
        total = total + reportCard.grades[i];
    }

    reportCard.averageGrade = total / reportCard.grades.length;

    return reportCard;
}

let reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};

console.log(updateReportCard(reportCard, 100));
