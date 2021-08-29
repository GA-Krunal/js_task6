const list = [
    {
      guardianId: "673f9a-bce6-42e2-b147-0e2882babf1c",
      modeOfContactId: "986a89-272a-4d4e-824b-cc8181286748",
      dateTimeOfContact: "",
    },
    {
      guardianId: "67a33f9a-bce6-42eb147-0e2882baf1c",
      modeOfContactId: "986a8946-272a-4d4824b-cc818186748",
      dateTimeOfContact: "2",
    },
    {
      guardianId: "67a33f9a-bce6-42e2-b147-0e22babf1c",
      modeOfContactId: "986a8946-272a-4d4e-824b-cc818126748",
      dateTimeOfContact: "1",
    },
    {
      guardianId: "67a33f9a-bce6-42e2-b147-0e2882bab1c",
      modeOfContactId: "986a8946-272a-4d4e-824b-cc811286748",
      dateTimeOfContact: "jhgfd",
    },
  ];

  let newArr = [];
  list.map((item) => {
    for(x in item){
        let val = item[x];
        newArr.push(val);
    }
  });
  console.log(newArr)

  var checkDuplicate = newArr.some((element , index) => {
      return newArr.indexOf(element) !== index;
  });
  console.log(checkDuplicate);