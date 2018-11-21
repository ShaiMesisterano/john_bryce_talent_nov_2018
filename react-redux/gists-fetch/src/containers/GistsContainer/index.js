import React from 'react';
import { connect } from 'react-redux';
import Gists from '../../components/Gists';
import { fetchGists } from '../../actions';

class GistsContainer extends React.Component {
    componentWillMount() {
        this.props._fetchGists();
    }
    render() {
        return (
            <Gists gists={this.props.gists} />
        )
    }
}

const mapStateToProps = state => {
    return  {
        gists: state.gistsReducer.gists || []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _fetchGists: () => dispatch(fetchGists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GistsContainer);