export const validateFile = (file: any, allowedTypes: string[], allowedSize: { min: number, max: number }) => {
    let fileArray : any = file.name.split(".");
    let fileType = fileArray[fileArray.length-1]
    const supportedTypes = allowedTypes.join(", ")
    if (!allowedTypes.includes(fileType)) {
        return `Invalid file type. Please select a ${supportedTypes} file.`
    } 
    // File size validation 
    const maxSizeInBytes = allowedSize.max * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
        return `File size exceeds the maximum limit (${allowedSize.max} MB). Please select a smaller file.`;
    }
    const minSizeInBytes = allowedSize.min * 1024 * 1024;
    if (file.size < minSizeInBytes) {
        return `File size is below the minimum limit (${allowedSize.min} MB). Please select a bigger file.`;
    }
    return undefined;
}