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

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]);
  
    const csvContent =
      headers.join(',') +
      '\n' +
      data.map((row) => headers.map((header) => row[header]).join(',')).join('\n');
  
    return csvContent;
  };
  
  export const downloadCSV = (data) => {
    
  
    const csv = convertToCSV(data);
  
    if (csv) {
      const blob = new Blob([csv], { type: 'text/csv' });
      const link = window.document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'data.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
 ;