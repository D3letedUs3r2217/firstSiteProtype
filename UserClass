class USER {
    constructor(Username, Email, Password){
        this.Username = Username
        this.Email = Email
        this.Password = Password
    }

    set Username(Oname){ 
        try{
            if(Oname.length < 12 && Oname.length > 1){
            this._userName = Oname
        }else{
            throw new Error('seu nome de usuário deve ter de 2 a 12 caracteres') 
        }
        }
         catch(error){
                console.error(error)
         }   
        
        
    }

    set Email(mail){
        try{
            if(mail.match(/@/g) == null){
                throw new Error('insira um Email válido!') 
            }else{
                this._Email = mail
            }
        }
        catch(error){
            console.error(error)
        }
        }

    set Password(pass){
        try{
           if(pass.length > 3){
            this._Password = pass
        }else{
            throw new Error('a sua senha deve ter mais de 3 caracteres')
        } 
        }
        catch(error){
            console.error(error)
        }
    }

        get Username(){
            return this._userName
        }
        get Email(){
            return this._Email
        }
        get Password(){
            return this._Password
        }

}
