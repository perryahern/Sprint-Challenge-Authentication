#Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is software that acts in between two other processes, such as a method that verifies that a user is logged in before displaying restricted information.

Sessions are user and instance-specific environments, identifying a user and the software they are using to access a site. The same user can have multiple sessions running with the same site if they use multiple browsers or other applications to connect to a site.

bcrypt is a password hashing function that uses salt and weights to discourage hacking. It's a proven method that has stood the test of time and is very reliable.

JWT, or JavaScript Web Tokens, are a way digitally transmitting information between two parties as a JSON object. The information can be verified and trusted because it is digitally signed. It allows sites to offload some of the burden of verifying users as they interact with the site by enabling a method to verify that the user is trusted and that each action made is from that user. It's similar to checking a person's credentials and giving them a security badge, and they then use that security badge for their access from that point forward until the badge is revoked or replaced.


#What does bcrypt do in order to prevent attacks?
bcrypt uses a few methods to prevent attacks. One is to salt the passwords so that the length of it is increased, thereby increasing the complexity of what would need to be hacked. In addition it uses a weight to slow down the hashing process in order to decrease the frequency that a hacker can test credentials and try to log in. This decreases the chance that it could be hacked and frustrates the hacker by greatly increasing the overall time to commit the hack.


#What are the three parts of the JSON Web Token?
The header, payload, and signature.
Header: the type of token and the hashing algorithm used.
Payload: contains the claims (statements about an entity - usually a user - and metadata); claims can be registered, public, or private.
Signature: verifies that the sender is who they say they are and that the message wasn't changed along the way.