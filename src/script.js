(function () {
  const list = [
    "Cloud Computing",
    "TypeScript",
    "AWS",
    "NodeJS",
    "Functional Programming",
    "Linux",
    "Javascript",
    "Containers",
    "Automation",
    "Bash",
    "CDK",
    "Java",
    "Clojure",
    "CI",
    "Ruby On Rails",
    "Postgresql",
    "DynamoDB",
    "S3",
    "Kubernetes",
    "Ansible",
    "Chef",
    "Cassandra"
  ];
  setInterval(function () {
    const target = document.getElementById("xxx");
    const random = Math.floor(Math.random() * list.length);
    target.innerText = list[random];
  }, 1500);
})();
