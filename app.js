function showHide(id) {
  try {
      var x = document.getElementById(id);
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
    } catch (error) {
      console.log(error);
    }
}
