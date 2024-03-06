module.exports = ( { env }  ) => {
    Proxy : true
    url : env('APP_URL')
    app : {
        keys : env.array('APP_KEYS')
    }
}