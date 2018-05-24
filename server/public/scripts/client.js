$( document ).ready( readyNow );

function readyNow() {
    $( 'tbody' ).empty();
    getAllRecords();
    $( '#addButton' ).on( 'click', function( event ){
        event.preventDefault();
        addRecord( getNewRecord() );
    });
}

function addRecord( record ) {
    $.ajax( {
        method: 'POST',
        url: '/record',
        data: record
    }).then( function( response ) {
        getAllRecords();
    }).catch( function( response ) {
        console.log( `Oh no!, ${ response.status } error occurred` );
    });
}

function displayAllRecords( recordArray ) {
    let $recordsTarget = $( '#records' );
    $recordsTarget.empty();
    for ( let record of recordArray ) {
        $recordsTarget.append( makeRowFor( record ) );
    }
}

function getAllRecords(){
    $.ajax( {
        method: 'GET',
        url: '/record'
    }).then( function( response ) {
        displayAllRecords( response );
    }); 
}

function getNewRecord() {
    let record = {
       artist: $( '#artist' ).val(),
       albumName: $( '#album' ).val(),
       year: $( '#year' ).val(),
       genreList: $( '#genre' ).val()
    }
    return record;
}

function makeRowFor( record ) {
    let rowHtml = `<tr>
                       <td>${ record.artist }</td>
                       <td>${ record.albumName }</td>
                       <td>${ record.year }</td>
                       <td>${ record.genreList.join( ', ' ) }</td>
                   </tr>`;
    return rowHtml;
}