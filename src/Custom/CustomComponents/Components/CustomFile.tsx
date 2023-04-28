import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { actions, DataContext } from "../../../Context";
import { useJsonForms } from "@jsonforms/react";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InputFieldStyle } from "../../../Styles/InputField";

const CustomFile = ({ data, value, updateValue, path }: any) => {
  const { state, objFunc, dispatch, id, setUiSchema, setSchema, setFormdata } =
    useContext(DataContext);
  const ctx = useJsonForms();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const saveData = (event: any) => {
    const callApi = async (event) => {
      objFunc
        .getServices(id, ctx, setFormdata, setUiSchema, setSchema, navigate, [
          data,
          event,
          searchParams,
          setSearchParams,
        ])
        .then((res: any) => {
          res[data.content.funcName]();
        });
      updateValue(event.target.value);
    };
    callApi(event);
  };
  return (
    <Stack direction={"row"} sx={{...InputFieldStyle}}>
      <TextField
        required={data.content.required}
        fullWidth
        onChange={(e) => {
          //@ts-ignore
          updateValue(e.target.files[0].name);
          saveData(e);
        }}
        value={value}
        sx={{ color: "red", border: "none" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => updateValue("")}>
                <DeleteIcon sx={{ marginRight: "10px" }} />
              </IconButton>
              <IconButton
                onClick={(event) => {
                  objFunc
                    .getServices(
                      id,
                      ctx,
                      setFormdata,
                      setUiSchema,
                      setSchema,
                      navigate,
                      [data, event, searchParams, setSearchParams]
                    )
                    .then((res: any) => {
                      res[data.content.downloadFuncName]();
                    });
                }}
              >
                <DownloadIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={data.content.helperText}
        size={data.content.size || "medium"}
        type={"file"}
      />
    </Stack>
  );
};

export default CustomFile;
