import json
import apiai

CLIENT_ACCESS_TOKEN = 'api key'


def nlu(mytext):
    ai = apiai.ApiAI(CLIENT_ACCESS_TOKEN)

    request = ai.text_request()

    request.lang = 'en'  # optional, default value equal 'en'

    # request.session_id = "<SESSION ID, UBIQUE FOR EACH USER>"

    request.query = mytext

    response = request.getresponse()
    string = response.read().decode('utf-8')
    json_obj = json.loads(string)
    # {'hexagon': '', 'rhombus': '', 'circle': '', 'circle_direction': '', 'rect_direction': 'down', 'rhombus_direction': '', 'triangle': 'Triangle', 'triangle_direction': '', 'square_direction': '', 'square': '', 'hexagon_direction': '', 'rect': '', 'number': [10]}

    # if json_obj['result']['action']=='x direction y by z units'
    # for i in json_obj:
    #     print(i,"\t",json_obj[i])
    # print(json_obj['result']['metadata']['intentName'])
    # print(json_obj['result']['actionIncomplete'])
    # print(json_obj['result']['parameters'])
    if json_obj['result']['metadata']['intentName'] != 'x direction y by z units':

        return json.dumps({"action":json_obj['result']['action'],"message":json_obj['result']['fulfillment']['speech'],'two_figures':False})
    else:
        a=[]
        di=json_obj['result']['parameters']
        for i in di :
            if di[i]=='':
                a.append(i)
        for i in a:
            del di[i]
        # di["two_figures"]=True

        result={}
        result['by'] = di['number'][0]
        del di['number']
        # {'number': [10], 'triangle': 'Triangle', 'rect_direction': 'down'}
        for i in ['rect_direction','circle_direction','triangle_direction','rhombus_direction','hexagon_direction','square_direction']:
            if i in di:
                result['second']=i.split('_')[0].lower()
                result['direction']=di[i]
                del di[i]
        for i in di:
            result['first']=di[i]


        result["two_figures"] = True
        print(result)
        return json.dumps(result)
        # {'two_figures': True, 'first': 'rect', 'second': 'Triangle', 'by': 10, 'direction': 'down'}
# nlu("rectangle below triangle by 10 units")
