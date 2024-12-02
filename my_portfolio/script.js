window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get("project");

  // Object containing project data
  const projectDetails = {
    partnersync: {
      title: "PartnerSync",
      description:
        "PartnerSync is a collaboration platform designed for business partnerships.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://www.partnersync.com",
      image: "images/partnersync.png",
    },
    clashofclans: {
      title: "Redesign Clash of Clans",
      description:
        "A modern redesign of the popular mobile game Clash of Clans.",
      technologies: ["Adobe XD", "Figma"],
      link: "https://www.clashofclans.com",
      image: "images/redesign.png",
    },
    photography: {
      title: "Photography",
      description: "A collection of my personal photography work.",
      technologies: ["Canon DSLR", "Photoshop"],
      link: "https://www.deepanshubhatia.com/photography",
      image: "images/20230814184533_IMG_5802.JPG",
    },
    business: {
      title: "Business Card",
      description: "A collection of my personal logo photography work.",
      technologies: ["Adobe Illustrator"],
      link: "https://www.deepanshubhatia.com/photography",
      image: "images/business_card.jpg",
    },
  };

  // Check if the project exists in the data
  if (project && projectDetails[project]) {
    const { title, description, technologies, link, image } =
      projectDetails[project];

    // Update the project details dynamically
    document.getElementById("project-title").innerText = title;
    document.getElementById("project-description").innerText = description;

    const techList = document.getElementById("technologies-list");
    techList.innerHTML = ""; // Clear any previous list items
    technologies.forEach((tech) => {
      const listItem = document.createElement("li");
      listItem.innerText = tech;
      techList.appendChild(listItem);
    });

    document.getElementById("project-link").setAttribute("href", link);

    // Check if the image exists
    fetch(image, { method: "HEAD" })
      .then((response) => {
        if (response.ok) {
          document.getElementById("project-image").src = image;
        } else {
          document.getElementById("project-image").src = "images/default.jpg";
        }
      })
      .catch(() => {
        document.getElementById("project-image").src = "images/default.jpg";
      });
  } else {
    // If the project is not found, display an error message
    document.querySelector(".project-details").innerHTML = `
          <h3>Project Not Found</h3>
          <p>The project you are looking for does not exist. Please go back to the <a href="index.html">Portfolio</a>.</p>
      `;
  }
});
