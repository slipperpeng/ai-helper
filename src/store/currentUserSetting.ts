import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const currentUserSettingSlice = createSlice({
  name:'currentUserSetting',
  initialState:{
    userName:'slipper',
  },
  reducers:{
    updateUserName:(state, action: PayloadAction<{ userName: string }>)=>{
      state.userName = action.payload.userName
    }
  }
})

export const { updateUserName } = currentUserSettingSlice.actions

export default currentUserSettingSlice.reducer

