
chrome.browserAction.onClicked.addListener(function(tab) {

    function get( url ) {

       return new Promise( function( resolve, reject ) {

          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", function() {
             resolve( this.responseText );
         });
          oReq.open("GET", url, true );
          oReq.send();

      } )

   }

   function getName( str ) {

       return new Promise( function( resolve, reject ) {

          var re = /<a class=".*\n?name.*\n?" href="\/([\S]*)"/gmi; 
          var m;

          while ((m = re.exec(str)) !== null) {
             if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
            resolve( m[ 1 ] );
            return;
        }

        reject();

    } );

   }

   function getRepositories( name ) {

        return new Promise( function( resolve, reject ) {

            get( 'https://github.com/' + name + '?tab=repositories' ).then( function ( str ) {

                var res = [];

                var re = /<a href="\/([\S]*)" itemprop="name codeRepository"/gmi; 
                var m;

                while ((m = re.exec(str)) !== null) {
                    if (m.index === re.lastIndex) {
                        re.lastIndex++;
                    }
                    res.push( m[ 1 ] );
                }

                resolve( res );

            } );

        } );

   }

   function createSearchPage( repos ) {

    var url = 'https://github.com/issues?utf8=✓&q=';
    var params = [ 'is:open', 'is:issue' ];
    repos.forEach( function( r ) { params.push( 'repo:' + r ) } );
    window.open( url + params.join( ' ' ) );

   }

    get( 'https://github.com' )
    .then( getName )
    .then( getRepositories )
    .then( createSearchPage )

} );