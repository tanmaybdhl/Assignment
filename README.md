# Assignment

API EndPoints : 

1.POST /chatlogs/<user>/
  creates a new chatlog entry for the user <user>. The POST data can either be
  url encoded or JSON encoded. The data should contain the following fields.
     ■ message - a String representing the message text
    ■ timestamp - a Long representing the timestamp
     ■ isSent - a Boolean/Integer representing if this message was sent by the
  user or received by the user
  The response from the message should be a unique messageID that we can
  refer to the message by.
  
2.GET /chatlogs/<user>
   Returns chatlogs for the given user. These should be returned in reverse
   timeorder (most recent messages first).
    ■ limit - an Integer stating how many messages should return. Default to 10
3. DELETE /chatlogs/<user>
    Deletes all the chatlogs for a given user.
4. DELETE /chatlogs/<user>/<msgid>
   Delete just the given chatlog for a given user. Returns an appropriate HTTP
   error response if the msgid is not found.
