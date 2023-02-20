function goodbye() {
  const confirmation = confirm("Are you sure you want to leave?");
  if (confirmation) {
    console.log("Leave.");
  }
  else if (!confirmation) {
    console.log("Canceled.");
    event.preventDefault(); 
  }
}
