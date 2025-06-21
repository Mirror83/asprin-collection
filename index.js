const aspirinUl = document.getElementById("aspirin-list");

// May change in the future, hence is a separate list
const aspirinList = new Array(5).fill(undefined).map((_, i) => {
  return `aspirin ${i + 1}`;
});

aspirinList.forEach((aspirin) => {
  const li = document.createElement("li");
  li.textContent = aspirin;
  aspirinUl.appendChild(li);
});
