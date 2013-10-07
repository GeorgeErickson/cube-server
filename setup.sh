# heroku apps:create cube-collector-drinkin --remote collector
# heroku apps:create cube-evaluator-drinkin --remote evaluator

heroku config:set CUBE_TYPE=evaluator -a cube-evaluator-drinkin
heroku config:set CUBE_TYPE=collector -a cube-collector-drinkin
