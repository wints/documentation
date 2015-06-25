Branch has several options for the customization of SMS messages from the Text Me the App page.

The following are the three different types of messages that can be sent:

####1. Link Specific Messages
You can define a special SMS message one the individual link scale. Whether you want to switch the language of a message for a different region or include device specific date, you can specify the message in the *Deep Link Data* section at the bottom of the link editing screen.  
![Deep Link Data](/img/ingredients/dashboard_setup/deeplink_data.png)  
Use the *key* of **$custom\_sms\_text** and then enter your custom message in the value section. (Make sure to include the {{ link }} tag in your custom message!) 

_Example:_  
The developer of FlowerPower wants to customize the SMS messages for their app based on the country of the recipient. For each Branch link, they would specify in the *deeplink data* a different custom message.  

For ads in France:  
`Cliquez pour télécharger FlowerPower ici {{ link }}`

For ads in Spain:  
`Haz click aquí para descargar FlowerPower {{ link }}`

For ads in Germany:  
`Klicken Sie auf das FlowerPower hier herunterladen {{ link }}`

####2. Custom Default for All Messages
You can create your own custom default message that will be sent if the specific link someone clicks doesn't have a customized message itself. To customize the default message, edit the form under the *Text me the app page* tab in the general settings	.  
![Default Text](/img/ingredients/dashboard_setup/default_message.png)

_Example:_  
A developer wants all their links that don't have individual customizations to have the default message of  
`Woah! Look at this cool new way to learn the different  
species of flowers! Download FlowerPower @ {{ link }}`

####3. Branch Default
If a developer doesn't specify a link specific message or a custom default, SMS messages will default to the format of  
`"Click here to download [App Name] {{ link }}"`


#### Reference:
- The tag _\{\{ link \}\}_ is replaced with your Branch link when sent
- The key `$custom_sms_text` is used for creating link specific custom SMSs

#### Advanced: Other Liquid Tags
In both the link specific custom messages and the custom default message, there is support for other liquid tags like   _\{\{ link.channel \}\}_ or _\{\{ link.campaign \}\}_. The customization options are only limited to your imagination.

Make sure to format the liquid tag with the link.data prefix before your key value.

E.g. _\{\{ link.data.title \}\}_

_Example:_  
Dmitri is creating Branch links to deeplink to each of the different flowers in his app FlowerPower. He creates each link with a key/value pair of the key _flower_ and the flower name. 

E.g. `Flower : Rose`, `Flower : Tulip`

He wants to customize his SMS messages based on name of the flower so he sets his custom link messages as:  

_\{\{ link.data.flower \}\}s on the mind? Click here to buy some for your home on FlowerPower! \{\{ link \}\}_  
![Key/Value Pair](/img/ingredients/dashboard_setup/key_value.png)

#### Advanced: Default Replacements for Liquid Tags
If a specific tag isn't always going to be filled, you can use a `|` character to specify a default to fallback on if the tag is missing from your link dictionary.

E.g. _\{\{ link.data.author \| default:"Alex" \}\}_

If the _link.data.author_ information isn't found, the tag will just be replaced with _Alex_ instead of being replaced by an empty string.