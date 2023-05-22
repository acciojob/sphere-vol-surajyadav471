function volume_sphere() {
    //Write your code here
   const radius = document.getElementById('radius').value;
  const volumeField = document.getElementById('volume');
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
	volumeField.value = volume.toFixed(4);
	event.preventDefault();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
