// eslint-disable-next-line import/no-unassigned-import
require('cross-fetch/polyfill');

// Remover comentário para utilizar realtimeDatabase
// npm install eventsource --save
// global.EventSource = require('eventsource');

const PocketBase = require('pocketbase/cjs')


enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod'
}

class Environment {

    private environment: String;
    public pocketBasteUrl = 'http://168.138.155.212'
    public client = new PocketBase('http://168.138.155.212');
    constructor(environment: String) {
        this.environment = environment;
        this.initializePocketBase().catch((error: any) =>{
            console.log(error);
          });
        console.log("🚀 ~ file: environment.ts ~ line 15 ~ Environment ~ constructor ~ this.environment", this.environment)
    }

    userLogin = {
        email: "generic@gmail.com",
        password: ""
    }
    public host: string = 'smtp.gmail.com';
    public service: string = 'gmail';
    public user: string = '';
    public password: string = '';

    async initializePocketBase(){
        
        try {
            const adminAuthData = await this.client.admins.authViaEmail('churrasking@gmail.com', 'A$HqYJL5#iQmFe!6');
            return adminAuthData;
        } catch (e) {
    
            console.error('ERROR', e);
    
        }
    }
}

export default new Environment(Environments.dev_environment);