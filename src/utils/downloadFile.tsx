export  const downloadFile = (obj: any) => {
  const typeArr = obj.name.split(".");
  const data = obj.data;
  const finalData = window.atob(data);
  let file ;
  file = new File([finalData],  typeArr[typeArr.length - 1] );
  
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = typeArr[typeArr.length - 1] === 'pdf' ?'data:application/octet-stream;base64,' + data: url;
  link.download = `${obj.name}`;
  document.body.appendChild(link);
  link.click();

  URL.revokeObjectURL(url);
  document.body.removeChild(link);
  };