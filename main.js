var image = [
    "chalmaal.jpeg", "MamaSeher.jpg", "RuhaanSeher.JPG", "papaandMeh.png", "Seher_FirstDay5thGrade.jpg"
];
var name1 = [
    "Family Book","Mama", "Ruhaan", "Papa", "Seher"
 ];

 var i = 0;

 function clickbutton() 
 {
    i++;
    var numbers_of_family_member_in_array = 5;
    if (i > numbers_of_family_member_in_array)
    {
       i = 0;
    }
var updatedImage = image[i];
var updatedName = name1[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}