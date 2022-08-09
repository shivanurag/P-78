var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var j = 0;

function update()
{
    j++;
    var numbers_of_family_member_in_array = 5
    if(j > numbers_of_family_member_in_array)
      {
          j = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage=images[j];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName=names[j];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
