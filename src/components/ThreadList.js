import Thread from "./Thread";

function ThreadList() {

  const mainThreadList =[
    {
      displayName: "Fun Cats!",
      accountsActive: 1000,
      subscribers: 4000
    },
    {
      displayName: "Cool Pics",
      accountsActive: 90,
      subscribers: 27516
    }
  ];

  return (
    <>
    {mainThreadList.map((thread, index) => 
      <Thread displayName={thread.displayName}
      accountsActive={thread.accountsActive}
      subscribers={thread.subscribers}
      key={index} />
      )}
    </>

  );
}

export default ThreadList;